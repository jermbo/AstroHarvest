import { Graphics, Text, TextStyle, Container } from "pixi.js";
import type { GameStateManager } from "@/systems/game-state";

// Dev tools console for debugging and testing
export class DevToolsConsole extends Container {
	private background!: Graphics;
	private title!: Text;
	private commandInput!: HTMLInputElement;
	private outputArea!: HTMLDivElement;
	private containerDiv!: HTMLDivElement;
	private gameStateManager: GameStateManager;
	private isVisible: boolean = false;
	private toggleButton!: Container;
	private isAnimating: boolean = false;

	constructor(gameStateManager: GameStateManager) {
		super();
		this.gameStateManager = gameStateManager;
		this.isVisible = false;

		this.createBackground();
		this.createTitle();
		this.createCommandInterface();
		this.createToggleButton();
		this.setupCommands();
	}

	private createBackground(): void {
		this.background = new Graphics();
		this.updateBackgroundSize();
		this.addChild(this.background);
	}

	private updateBackgroundSize(): void {
		if (!this.background) return;

		const screenWidth = window.innerWidth;
		this.background.clear();
		this.background
			.rect(0, 0, screenWidth, 300)
			.fill({ color: 0x1a1a1a, alpha: 0.95 })
			.stroke({ color: 0x00ff00, width: 2 });
	}

	private createTitle(): void {
		this.title = new Text({
			text: "Dev Tools Console",
			style: new TextStyle({
				fontSize: 18,
				fontWeight: "bold",
				fill: 0x00ff00,
				align: "center",
			}),
		});
		this.title.anchor.set(0.5);
		this.title.y = 20;
		this.updateTitlePosition();
		this.addChild(this.title);
	}

	private createToggleButton(): void {
		// Create container for toggle button
		this.toggleButton = new Container();
		this.toggleButton.y = -40;
		this.toggleButton.interactive = true;
		this.toggleButton.cursor = "pointer";
		this.updateToggleButtonPosition();

		// Create background graphics
		const buttonBackground = new Graphics();
		buttonBackground
			.rect(0, 0, 60, 30)
			.fill({ color: 0x00ff00, alpha: 0.8 })
			.stroke({ color: 0xffffff, width: 1 });
		this.toggleButton.addChild(buttonBackground);

		// Add toggle text
		const toggleText = new Text({
			text: "DEV",
			style: new TextStyle({
				fontSize: 10,
				fontWeight: "bold",
				fill: 0x000000,
				align: "center",
			}),
		});
		toggleText.anchor.set(0.5);
		toggleText.x = 30;
		toggleText.y = 15;
		this.toggleButton.addChild(toggleText);

		this.toggleButton.on("pointerdown", () => {
			this.toggle();
		});

		this.addChild(this.toggleButton);
	}

	private updateTitlePosition(): void {
		if (!this.title) return;

		const screenWidth = window.innerWidth;
		this.title.x = screenWidth / 2;
	}

	private updateToggleButtonPosition(): void {
		if (!this.toggleButton) return;

		const screenWidth = window.innerWidth;
		this.toggleButton.x = screenWidth - 70; // 10px margin from right edge
	}

	private updateCommandInterfaceSize(): void {
		if (!this.containerDiv) return;

		const screenWidth = window.innerWidth;
		this.containerDiv.style.width = `${screenWidth - 20}px`;
	}

	private createCommandInterface(): void {
		// Create parent container div
		this.containerDiv = document.createElement("div");
		this.containerDiv.style.position = "fixed";
		this.containerDiv.style.left = "10px";
		this.containerDiv.style.bottom = "10px";
		this.containerDiv.style.display = "none"; // Initially hidden

		// Create command input
		this.commandInput = document.createElement("input");
		this.commandInput.type = "text";
		this.commandInput.placeholder = "Enter command (e.g., add_credits(100))";
		this.commandInput.style.width = "100%";
		this.commandInput.style.height = "30px";
		this.commandInput.style.marginBottom = "10px";
		this.commandInput.style.backgroundColor = "#2a2a2a";
		this.commandInput.style.color = "#00FF00";
		this.commandInput.style.border = "1px solid #00FF00";
		this.commandInput.style.padding = "5px";
		this.commandInput.style.fontFamily = "monospace";
		this.commandInput.style.boxSizing = "border-box";

		// Create output area
		this.outputArea = document.createElement("div");
		this.outputArea.style.width = "100%";
		this.outputArea.style.height = "200px";
		this.outputArea.style.backgroundColor = "#1a1a1a";
		this.outputArea.style.color = "#00FF00";
		this.outputArea.style.border = "1px solid #00FF00";
		this.outputArea.style.padding = "10px";
		this.outputArea.style.fontFamily = "monospace";
		this.outputArea.style.fontSize = "12px";
		this.outputArea.style.overflow = "auto";
		this.outputArea.style.boxSizing = "border-box";

		// Add elements to container
		this.containerDiv.appendChild(this.commandInput);
		this.containerDiv.appendChild(this.outputArea);

		// Set initial sizes after both elements are created
		this.updateCommandInterfaceSize();

		// Add help text
		this.outputArea.innerHTML = `
			<div>Dev Tools Console - Available Commands:</div>
			<div>• add_credits(amount) - Add credits</div>
			<div>• add_seeds(crop_id, quantity) - Add seeds</div>
			<div>• speed_up_growth(multiplier) - Speed up growth</div>
			<div>• skip_to_harvest() - Skip to harvest</div>
			<div>• pause_timers() - Pause all timers</div>
			<div>• reset_timers() - Reset timer multiplier</div>
			<div>• show_state() - Show current game state</div>
			<div>• help() - Show this help</div>
			<div>----------------------------------------</div>
			<div>Toggle: Cmd+Shift+D (Mac) or Ctrl+Shift+D (Win/Linux)</div>
		`;

		// Add event listener for command input
		this.commandInput.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				this.executeCommand(this.commandInput.value);
				this.commandInput.value = "";
			}
		});
	}

	private setupCommands(): void {
		// Make commands available globally for console access
		(window as any).devCommands = {
			add_credits: (amount: number) => this.addCredits(amount),
			add_seeds: (cropId: string, quantity: number) =>
				this.addSeeds(cropId, quantity),
			speed_up_growth: (multiplier: number) => this.speedUpGrowth(multiplier),
			skip_to_harvest: () => this.skipToHarvest(),
			pause_timers: () => this.pauseTimers(),
			reset_timers: () => this.resetTimers(),
			show_state: () => this.showState(),
			help: () => this.showHelp(),
		};
	}

	private executeCommand(command: string): void {
		this.log(`> ${command}`);

		try {
			// Simple command parsing
			if (command.includes("add_credits(")) {
				const amount = parseInt(
					command.match(/add_credits\((\d+)\)/)?.[1] || "0"
				);
				this.addCredits(amount);
			} else if (command.includes("add_seeds(")) {
				const match = command.match(/add_seeds\(([^,]+),\s*(\d+)\)/);
				if (match) {
					const cropId = match[1].replace(/['"]/g, "");
					const quantity = parseInt(match[2]);
					this.addSeeds(cropId, quantity);
				}
			} else if (command.includes("speed_up_growth(")) {
				const multiplier = parseFloat(
					command.match(/speed_up_growth\(([^)]+)\)/)?.[1] || "1"
				);
				this.speedUpGrowth(multiplier);
			} else if (command === "skip_to_harvest()") {
				this.skipToHarvest();
			} else if (command === "pause_timers()") {
				this.pauseTimers();
			} else if (command === "reset_timers()") {
				this.resetTimers();
			} else if (command === "show_state()") {
				this.showState();
			} else if (command === "clear_database()") {
				this.clearDatabase();
			} else if (command === "help()") {
				this.showHelp();
			} else {
				this.log("Unknown command. Type help() for available commands.");
			}
		} catch (error) {
			this.log(`Error: ${error}`);
		}
	}

	private addCredits(amount: number): void {
		this.gameStateManager.addCredits(amount);
		this.log(
			`Added ${amount} credits. Total: ${this.gameStateManager.getPlayer().credits}`
		);
	}

	private addSeeds(cropId: string, quantity: number): void {
		this.gameStateManager.addSeeds(cropId, quantity);
		this.log(
			`Added ${quantity} ${cropId} seeds. Total: ${this.gameStateManager.getPlayer().seeds[cropId] || 0}`
		);
	}

	private speedUpGrowth(multiplier: number): void {
		this.gameStateManager.setTimeMultiplier(multiplier);
		this.log(`Growth speed set to ${multiplier}x`);
	}

	private skipToHarvest(): void {
		// Make all growing crops ready
		this.gameStateManager.getPlots().forEach((plot) => {
			if (plot.status === "growing") {
				this.gameStateManager.updatePlot(plot.id, (p) => {
					p.status = "ready";
				});
			}
		});
		this.log("All crops set to ready for harvest");
	}

	private pauseTimers(): void {
		const devTools = this.gameStateManager.getDevTools();
		this.gameStateManager.setTimersPaused(!devTools.timersPaused);
		this.log(`Timers ${devTools.timersPaused ? "paused" : "resumed"}`);
	}

	private resetTimers(): void {
		this.gameStateManager.setTimeMultiplier(1);
		this.gameStateManager.setTimersPaused(false);
		this.log("Timer settings reset to normal");
	}

	private showState(): void {
		const state = this.gameStateManager.getState();
		this.log("Current Game State:");
		this.log(`Credits: ${state.player.credits}`);
		this.log(`XP: ${state.player.xp} (Level ${state.player.level})`);
		this.log(`Seeds: ${JSON.stringify(state.player.seeds)}`);
		this.log(`Plots: ${state.plots.length}`);
		this.log(`Dev Tools: ${state.devTools.enabled ? "enabled" : "disabled"}`);
	}

	private async clearDatabase(): Promise<void> {
		try {
			// Get the save system from the game state manager
			const saveSystem = (this.gameStateManager as any).saveSystem;
			if (saveSystem && saveSystem.clearAllData) {
				await saveSystem.clearAllData();
				this.log(
					"Database cleared successfully! Refresh the page to start fresh."
				);
			} else {
				this.log("Error: Save system not available");
			}
		} catch (error) {
			this.log(`Error clearing database: ${error}`);
		}
	}

	private showHelp(): void {
		this.log("Available Commands:");
		this.log("• add_credits(amount) - Add credits");
		this.log("• add_seeds(crop_id, quantity) - Add seeds");
		this.log("• speed_up_growth(multiplier) - Speed up growth");
		this.log("• skip_to_harvest() - Skip to harvest");
		this.log("• pause_timers() - Pause all timers");
		this.log("• reset_timers() - Reset timer multiplier");
		this.log("• show_state() - Show current game state");
		this.log("• clear_database() - Clear all save data");
		this.log("• help() - Show this help");
	}

	private log(message: string): void {
		const timestamp = new Date().toLocaleTimeString();
		this.outputArea.innerHTML += `<div>[${timestamp}] ${message}</div>`;
		this.outputArea.scrollTop = this.outputArea.scrollHeight;
	}

	public show(): void {
		if (this.isAnimating) return;

		this.isVisible = true;
		this.isAnimating = true;

		// Position at bottom of screen, start hidden
		const screenHeight = window.innerHeight;
		this.x = 0;
		this.y = screenHeight; // Start below the visible area
		this.background.visible = false;
		this.title.visible = false;

		// Position HTML container off-screen initially
		this.containerDiv.style.bottom = "-250px";

		// Add HTML container to document
		document.body.appendChild(this.containerDiv);

		// Initially hide HTML container
		this.containerDiv.style.display = "none";

		// Simple animation using requestAnimationFrame
		const animateIn = () => {
			this.y -= 20; // Slide up 20px per frame

			// Position HTML container to follow the Pixi container
			const containerBottom = screenHeight - this.y;
			this.containerDiv.style.bottom = `${containerBottom - 290}px`;

			// Show background and title when we're partially visible
			if (this.y <= screenHeight - 150) {
				this.background.visible = true;
				this.title.visible = true;
				// Show HTML container when background becomes visible
				this.containerDiv.style.display = "block";
			}

			if (this.y > screenHeight - 300) {
				requestAnimationFrame(animateIn);
			} else {
				this.y = screenHeight - 300; // Snap to final position (300px from bottom)
				this.containerDiv.style.bottom = "10px";
				this.background.visible = true;
				this.title.visible = true;
				this.containerDiv.style.display = "block";
				this.isAnimating = false;
				this.commandInput.focus();
			}
		};
		requestAnimationFrame(animateIn);
	}

	public hide(): void {
		if (this.isAnimating) return;

		this.isAnimating = true;

		// Animate slide down to bottom
		const screenHeight = window.innerHeight;
		const animateOut = () => {
			this.y += 20; // Slide down 20px per frame

			// Position HTML container to follow the Pixi container
			const containerBottom = screenHeight - this.y;
			this.containerDiv.style.bottom = `${containerBottom - 290}px`;

			// Hide background and title when we're mostly off-screen
			if (this.y >= screenHeight - 150) {
				this.background.visible = false;
				this.title.visible = false;
				// Hide HTML container when background becomes hidden
				this.containerDiv.style.display = "none";
			}

			if (this.y < screenHeight) {
				requestAnimationFrame(animateOut);
			} else {
				this.y = screenHeight; // Snap to off-screen position
				this.containerDiv.style.bottom = "-250px";
				this.isVisible = false;
				this.background.visible = false;
				this.title.visible = false;
				this.containerDiv.style.display = "none";
				this.isAnimating = false;

				// Remove HTML container from document
				if (this.containerDiv.parentNode) {
					this.containerDiv.parentNode.removeChild(this.containerDiv);
				}
			}
		};
		requestAnimationFrame(animateOut);
	}

	public toggle(): void {
		if (this.isVisible) {
			this.hide();
		} else {
			this.show();
		}
	}

	public centerOnScreen(_screenWidth: number, screenHeight: number): void {
		// Position drawer at the bottom of the screen
		this.x = 0;
		this.y = screenHeight; // Start hidden below screen
		this.updateResponsiveLayout();
	}

	public updateResponsiveLayout(): void {
		this.updateBackgroundSize();
		this.updateTitlePosition();
		this.updateToggleButtonPosition();
		this.updateCommandInterfaceSize();

		// Ensure HTML container visibility matches the Pixi container visibility
		if (this.containerDiv) {
			const shouldBeVisible = this.isVisible && this.background.visible;
			this.containerDiv.style.display = shouldBeVisible ? "block" : "none";
		}
	}
}
