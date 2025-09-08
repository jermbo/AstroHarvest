import { Application, Container } from "pixi.js";
import { GameStateManager } from "@/systems/game-state";
import { TimerSystem } from "@/systems/timer";
import { SaveSystem } from "@/systems/save-system";
import { PlotComponent } from "@/components/plot";
import { SeedSelectionModal } from "@/components/seed-selection-modal";
import { PlayerStatsUI } from "@/components/ui";
import { DevToolsConsole } from "@/components/dev-tools";
import { getCropDefinition, getAllCrops } from "@/data/crops";
import type { PlotState, CropState } from "@/types/game";

// Main game class for AstroHarvest
export class AstroHarvestGame {
	private app: Application;
	private gameContainer: Container;
	private gameStateManager: GameStateManager;
	private timerSystem: TimerSystem;
	private saveSystem: SaveSystem;
	private plotComponents: Map<string, PlotComponent> = new Map();
	private seedModal: SeedSelectionModal | null = null;
	private playerStatsUI: PlayerStatsUI | null = null;
	private devToolsConsole: DevToolsConsole | null = null;
	private selectedPlotId: string | null = null;
	private gameLoopId: number | null = null;

	constructor() {
		this.app = new Application();
		this.gameContainer = new Container();
		this.gameStateManager = new GameStateManager();
		this.timerSystem = new TimerSystem();
		this.saveSystem = new SaveSystem();
	}

	public async initialize(): Promise<void> {
		// Initialize Pixi.js
		await this.app.init({
			background: "#1a1a2e",
			resizeTo: window,
		});

		// Initialize save system
		await this.saveSystem.initialize();

		// Try to load existing save
		const savedState = await this.saveSystem.loadGame();
		if (savedState) {
			this.gameStateManager.updateState(() => savedState);
		}

		// Set up the game container
		this.app.stage.addChild(this.gameContainer);

		// Create plot components
		this.createPlotComponents();

		// Create seed selection modal
		this.createSeedModal();

		// Create UI components
		this.createUIComponents();

		// Set up event handlers
		this.setupEventHandlers();

		// Start game loop
		this.startGameLoop();

		// Set up auto-save
		this.setupAutoSave();

		// Append canvas to DOM
		const container = document.getElementById("pixi-container");
		if (container) {
			container.appendChild(this.app.canvas);
		}
	}

	private createPlotComponents(): void {
		const plots = this.gameStateManager.getPlots();

		plots.forEach((plot) => {
			const plotComponent = new PlotComponent(plot);
			plotComponent.setOnClick((plotState) => {
				this.handlePlotClick(plotState);
			});

			this.plotComponents.set(plot.id, plotComponent);
			this.gameContainer.addChild(plotComponent);
		});
	}

	private createSeedModal(): void {
		const availableSeeds = this.getAvailableSeeds();
		const playerCredits = this.gameStateManager.getPlayer().credits;

		this.seedModal = new SeedSelectionModal(availableSeeds, playerCredits);
		this.seedModal.setOnSeedSelected((cropId) => {
			this.handleSeedSelection(cropId);
		});
		this.seedModal.setOnClose(() => {
			this.selectedPlotId = null;
		});

		this.gameContainer.addChild(this.seedModal);
		this.seedModal.centerOnScreen(
			this.app.screen.width,
			this.app.screen.height
		);
	}

	private createUIComponents(): void {
		// Create player stats UI
		this.playerStatsUI = new PlayerStatsUI();
		this.gameContainer.addChild(this.playerStatsUI);

		// Create dev tools console
		this.devToolsConsole = new DevToolsConsole(this.gameStateManager);
		this.gameContainer.addChild(this.devToolsConsole);
		this.devToolsConsole.centerOnScreen(
			this.app.screen.width,
			this.app.screen.height
		);
	}

	private getAvailableSeeds(): {
		cropId: string;
		quantity: number;
		definition: any;
	}[] {
		const player = this.gameStateManager.getPlayer();
		const allCrops = getAllCrops();

		return allCrops
			.filter((crop) => player.seeds[crop.id] > 0)
			.map((crop) => ({
				cropId: crop.id,
				quantity: player.seeds[crop.id],
				definition: crop,
			}));
	}

	private setupEventHandlers(): void {
		// Dev tools toggle (Cmd+Shift+D / Ctrl+Shift+D)
		document.addEventListener("keydown", (event) => {
			if (event.key === "d" || event.key === "D") {
				const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
				const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;

				if (isCmdOrCtrl && event.shiftKey) {
					event.preventDefault();
					this.gameStateManager.toggleDevTools();
					const devTools = this.gameStateManager.getDevTools();
					if (devTools.enabled) {
						this.devToolsConsole?.show();
					} else {
						this.devToolsConsole?.hide();
					}
				}
			}
		});

		// Handle window resize
		window.addEventListener("resize", () => {
			if (this.seedModal) {
				this.seedModal.centerOnScreen(
					this.app.screen.width,
					this.app.screen.height
				);
			}
			if (this.devToolsConsole) {
				// Only update responsive layout, don't reset position
				this.devToolsConsole.updateResponsiveLayout();
			}
		});
	}

	private handlePlotClick(plot: PlotState): void {
		if (plot.status === "empty") {
			// Show seed selection modal
			this.selectedPlotId = plot.id;
			this.updateSeedModal();
			this.seedModal?.show();
		} else if (plot.status === "ready") {
			// Harvest the crop
			this.harvestCrop(plot.id);
		}
	}

	private handleSeedSelection(cropId: string): void {
		if (!this.selectedPlotId) return;

		const cropDefinition = getCropDefinition(cropId);
		if (!cropDefinition) return;

		// Check if player has seeds and credits
		const player = this.gameStateManager.getPlayer();
		if (player.seeds[cropId] <= 0) return;

		// Use seed and plant crop
		if (this.gameStateManager.useSeed(cropId)) {
			this.plantCrop(this.selectedPlotId, cropDefinition);
		}

		this.selectedPlotId = null;
	}

	private plantCrop(plotId: string, cropDefinition: any): void {
		const growthTimeMs = cropDefinition.growthMinutes * 60 * 1000; // Convert fractional minutes to milliseconds
		const cropState: CropState = {
			id: `${plotId}_crop_${Date.now()}`,
			type: cropDefinition.id,
			plantedAt: Date.now(),
			growthTime: growthTimeMs, // Store in milliseconds
			watered: false,
			waterBonus: 0,
		};

		this.gameStateManager.updatePlot(plotId, (plot) => {
			plot.crop = cropState;
			plot.status = "growing"; // Start growing immediately
			plot.plantedAt = Date.now();
			plot.growthTime = growthTimeMs;
		});

		// Start timer for this plot
		this.timerSystem.startTimer(plotId, growthTimeMs);

		// Update visual
		const plotComponent = this.plotComponents.get(plotId);
		if (plotComponent) {
			const updatedPlot = this.gameStateManager.getPlot(plotId);
			if (updatedPlot) {
				plotComponent.updatePlotState(updatedPlot);
			}
		}

		// Update UI
		this.updateUI();
	}

	private updateUI(): void {
		if (this.playerStatsUI) {
			this.playerStatsUI.updateStats(this.gameStateManager.getPlayer());
		}
	}

	private harvestCrop(plotId: string): void {
		const plot = this.gameStateManager.getPlot(plotId);
		if (!plot || !plot.crop || plot.status !== "ready") return;

		const cropDefinition = getCropDefinition(plot.crop.type);
		if (!cropDefinition) return;

		// Calculate yield
		const yieldAmount =
			Math.floor(
				Math.random() *
					(cropDefinition.yield.max - cropDefinition.yield.min + 1)
			) + cropDefinition.yield.min;

		// Add credits and XP
		const creditsEarned = yieldAmount * cropDefinition.sellPriceRaw;
		this.gameStateManager.addCredits(creditsEarned);
		this.gameStateManager.addXP(2); // 2 XP per harvest

		// Clear the plot
		this.gameStateManager.updatePlot(plotId, (plot) => {
			plot.crop = undefined;
			plot.status = "empty";
			plot.plantedAt = undefined;
			plot.growthTime = undefined;
		});

		// Clear timer
		this.timerSystem.clearTimer(plotId);

		// Update visual
		const plotComponent = this.plotComponents.get(plotId);
		if (plotComponent) {
			const updatedPlot = this.gameStateManager.getPlot(plotId);
			if (updatedPlot) {
				plotComponent.updatePlotState(updatedPlot);
			}
		}

		// Update UI
		this.updateUI();

		// Show harvest feedback
		console.log(
			`Harvested ${yieldAmount} ${cropDefinition.displayName} for ${creditsEarned} credits!`
		);
	}

	private updateSeedModal(): void {
		if (!this.seedModal) return;

		const availableSeeds = this.getAvailableSeeds();
		const playerCredits = this.gameStateManager.getPlayer().credits;

		// Recreate modal with updated data
		this.gameContainer.removeChild(this.seedModal);
		this.createSeedModal();
	}

	private startGameLoop(): void {
		const gameLoop = () => {
			this.update();
			this.gameLoopId = requestAnimationFrame(gameLoop);
		};
		gameLoop();
	}

	private update(): void {
		const devTools = this.gameStateManager.getDevTools();

		// Update timers
		const updatedPlots = this.timerSystem.updateTimers(
			this.gameStateManager.getPlots(),
			devTools.timeMultiplier,
			devTools.timersPaused
		);

		// Update plot states
		updatedPlots.forEach((plot) => {
			const currentPlot = this.gameStateManager.getPlot(plot.id);
			if (currentPlot && currentPlot.status !== plot.status) {
				this.gameStateManager.updatePlot(plot.id, (p) => {
					p.status = plot.status;
				});

				// Update visual
				const plotComponent = this.plotComponents.get(plot.id);
				if (plotComponent) {
					plotComponent.updatePlotState(plot);
				}
			}
		});

		// Update UI periodically
		if (Math.random() < 0.1) {
			// Update UI 10% of the time to avoid excessive updates
			this.updateUI();
		}
	}

	private setupAutoSave(): void {
		// Auto-save every 30 seconds
		setInterval(async () => {
			try {
				await this.saveSystem.saveGame(this.gameStateManager.getState());
				console.log("Game auto-saved");
			} catch (error) {
				console.error("Auto-save failed:", error);
			}
		}, 30000);

		// Save on page unload
		window.addEventListener("beforeunload", async () => {
			try {
				await this.saveSystem.saveGame(this.gameStateManager.getState());
			} catch (error) {
				console.error("Save on unload failed:", error);
			}
		});
	}

	public destroy(): void {
		if (this.gameLoopId) {
			cancelAnimationFrame(this.gameLoopId);
		}
		this.app.destroy();
	}
}
