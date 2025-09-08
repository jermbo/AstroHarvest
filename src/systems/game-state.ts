import type { GameState, PlayerState, PlotState } from "@/types/game";
import type { SaveSystem } from "./save-system";

// Game state management system
export class GameStateManager {
	private state: GameState;
	public saveSystem?: SaveSystem;

	constructor() {
		this.state = this.createInitialState();
	}

	private createInitialState(): GameState {
		return {
			player: {
				credits: 50, // Start with 50 credits to afford new crops
				seeds: {
					"crop.quantum_blueberry": 3, // Start with 3 seeds
					"crop.stellar_strawberry": 1, // Start with 1 seed
					"crop.cosmic_carrot": 1, // Start with 1 seed
				},
				inventory: {}, // Start with empty inventory
				xp: 0,
				level: 1,
			},
			plots: [
				{
					id: "plot_1",
					position: { x: 100, y: 100 },
					status: "empty",
				},
			],
			lastSaveTime: Date.now(),
			devTools: {
				enabled: false,
				timeMultiplier: 1,
				timersPaused: false,
			},
		};
	}

	public getState(): GameState {
		return this.state;
	}

	public updateState(updater: (state: GameState) => void): void {
		updater(this.state);
		this.state.lastSaveTime = Date.now();
	}

	public getPlayer(): PlayerState {
		return this.state.player;
	}

	public getPlots(): PlotState[] {
		return this.state.plots;
	}

	public getPlot(id: string): PlotState | null {
		return this.state.plots.find((plot) => plot.id === id) || null;
	}

	public updatePlot(id: string, updater: (plot: PlotState) => void): boolean {
		const plotIndex = this.state.plots.findIndex((plot) => plot.id === id);
		if (plotIndex === -1) return false;

		updater(this.state.plots[plotIndex]);
		this.state.lastSaveTime = Date.now();
		return true;
	}

	public addCredits(amount: number): void {
		this.state.player.credits += amount;
		this.state.lastSaveTime = Date.now();
	}

	public spendCredits(amount: number): boolean {
		if (this.state.player.credits < amount) return false;
		this.state.player.credits -= amount;
		this.state.lastSaveTime = Date.now();
		return true;
	}

	public addSeeds(cropId: string, quantity: number): void {
		if (!this.state.player.seeds[cropId]) {
			this.state.player.seeds[cropId] = 0;
		}
		this.state.player.seeds[cropId] += quantity;
		this.state.lastSaveTime = Date.now();
	}

	public useSeed(cropId: string): boolean {
		if (
			!this.state.player.seeds[cropId] ||
			this.state.player.seeds[cropId] <= 0
		) {
			return false;
		}
		this.state.player.seeds[cropId]--;
		this.state.lastSaveTime = Date.now();
		return true;
	}

	public addXP(amount: number): void {
		this.state.player.xp += amount;
		// Simple level calculation: 100 XP per level
		const newLevel = Math.floor(this.state.player.xp / 100) + 1;
		if (newLevel > this.state.player.level) {
			this.state.player.level = newLevel;
		}
		this.state.lastSaveTime = Date.now();
	}

	public addToInventory(itemId: string, quantity: number): void {
		if (!this.state.player.inventory[itemId]) {
			this.state.player.inventory[itemId] = 0;
		}
		this.state.player.inventory[itemId] += quantity;
		this.state.lastSaveTime = Date.now();
	}

	public getInventory(): Record<string, number> {
		return this.state.player.inventory;
	}

	public getDevTools() {
		return this.state.devTools;
	}

	public setTimeMultiplier(multiplier: number): void {
		this.state.devTools.timeMultiplier = multiplier;
		this.state.lastSaveTime = Date.now();
	}

	public setTimersPaused(paused: boolean): void {
		this.state.devTools.timersPaused = paused;
		this.state.lastSaveTime = Date.now();
	}

	public toggleDevTools(): void {
		this.state.devTools.enabled = !this.state.devTools.enabled;
		this.state.lastSaveTime = Date.now();
	}
}
