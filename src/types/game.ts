// Core game data structures for AstroHarvest

export interface PlotState {
	id: string;
	position: { x: number; y: number };
	crop?: CropState;
	status: "empty" | "planted" | "growing" | "ready";
	plantedAt?: number;
	growthTime?: number;
}

export interface CropState {
	id: string;
	type: string;
	plantedAt: number;
	growthTime: number;
	watered: boolean;
	waterBonus: number;
}

export interface CropDefinition {
	id: string;
	displayName: string;
	growthMinutes: number; // Can be fractional (e.g., 0.5 for 30 seconds)
	buyPrice: number;
	sellPriceRaw: number;
	yield: { min: number; max: number };
	visual: {
		seedColor: string;
		harvestColor: string;
		harvestShape: "berries" | "root" | "fruit" | "vegetable";
		harvestPosition: "above_ground" | "below_ground";
	};
}

export interface PlayerState {
	credits: number;
	seeds: Record<string, number>;
	inventory: Record<string, number>; // Harvested items
	xp: number;
	level: number;
}

export interface GameState {
	player: PlayerState;
	plots: PlotState[];
	lastSaveTime: number;
	devTools: {
		enabled: boolean;
		timeMultiplier: number;
		timersPaused: boolean;
	};
}

export interface SaveData {
	gameState: GameState;
	version: string;
	timestamp: number;
}
