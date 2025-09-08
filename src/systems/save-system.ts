import type { GameState, SaveData } from "@/types/game";

// Save system using IndexedDB for persistence
export class SaveSystem {
	private dbName = "AstroHarvest";
	private dbVersion = 1;
	private storeName = "gameSaves";
	private db: IDBDatabase | null = null;

	public async initialize(): Promise<void> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.dbVersion);

			request.onerror = () => {
				reject(new Error("Failed to open IndexedDB"));
			};

			request.onsuccess = () => {
				this.db = request.result;
				resolve();
			};

			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;
				if (!db.objectStoreNames.contains(this.storeName)) {
					db.createObjectStore(this.storeName, { keyPath: "id" });
				}
			};
		});
	}

	public async saveGame(gameState: GameState): Promise<boolean> {
		if (!this.db) {
			await this.initialize();
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				reject(new Error("Database not initialized"));
				return;
			}

			const saveData: SaveData = {
				gameState,
				version: "0.1.0",
				timestamp: Date.now(),
			};

			const transaction = this.db.transaction([this.storeName], "readwrite");
			const store = transaction.objectStore(this.storeName);
			const request = store.put({ id: "main", ...saveData });

			request.onsuccess = () => {
				resolve(true);
			};

			request.onerror = () => {
				reject(new Error("Failed to save game"));
			};
		});
	}

	public async loadGame(): Promise<GameState | null> {
		if (!this.db) {
			await this.initialize();
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				reject(new Error("Database not initialized"));
				return;
			}

			const transaction = this.db.transaction([this.storeName], "readonly");
			const store = transaction.objectStore(this.storeName);
			const request = store.get("main");

			request.onsuccess = () => {
				const result = request.result;
				if (result && result.gameState) {
					// Calculate offline progress
					const offlineTime = Date.now() - result.timestamp;
					const gameState = this.calculateOfflineProgress(
						result.gameState,
						offlineTime
					);
					resolve(gameState);
				} else {
					resolve(null);
				}
			};

			request.onerror = () => {
				reject(new Error("Failed to load game"));
			};
		});
	}

	private calculateOfflineProgress(
		gameState: GameState,
		offlineTimeMs: number
	): GameState {
		// Calculate offline progress for all plots
		const updatedPlots = gameState.plots.map((plot) => {
			if (!plot.crop || plot.status === "ready" || plot.status === "empty") {
				return plot;
			}

			const timeMultiplier = gameState.devTools.timeMultiplier;
			const effectiveOfflineTime = offlineTimeMs * timeMultiplier;
			const growthProgress =
				effectiveOfflineTime / (plot.crop.growthTime * 1000);

			if (growthProgress >= 1) {
				return {
					...plot,
					status: "ready" as const,
				};
			}

			return plot;
		});

		return {
			...gameState,
			plots: updatedPlots,
			lastSaveTime: Date.now(),
		};
	}

	public async exportSave(): Promise<string> {
		const gameState = await this.loadGame();
		if (!gameState) {
			throw new Error("No save data to export");
		}

		const saveData: SaveData = {
			gameState,
			version: "0.1.0",
			timestamp: Date.now(),
		};

		return JSON.stringify(saveData, null, 2);
	}

	public async importSave(saveDataJson: string): Promise<boolean> {
		try {
			const saveData: SaveData = JSON.parse(saveDataJson);
			return await this.saveGame(saveData.gameState);
		} catch (error) {
			console.error("Failed to import save data:", error);
			return false;
		}
	}

	public async deleteSave(): Promise<boolean> {
		if (!this.db) {
			await this.initialize();
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				reject(new Error("Database not initialized"));
				return;
			}

			const transaction = this.db.transaction([this.storeName], "readwrite");
			const store = transaction.objectStore(this.storeName);
			const request = store.delete("main");

			request.onsuccess = () => {
				resolve(true);
			};

			request.onerror = () => {
				reject(new Error("Failed to delete save"));
			};
		});
	}
}
