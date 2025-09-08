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
	growthMinutes: number;
	buyPrice: number;
	sellPriceRaw: number;
	yield: { min: number; max: number };
}

export interface PlayerState {
	credits: number;
	seeds: Record<string, number>;
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
