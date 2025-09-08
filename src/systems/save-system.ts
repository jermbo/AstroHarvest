import type { GameState, SaveData, PlayerState, PlotState } from "@/types/game";

// Save system using IndexedDB with separate object stores for different data types
export class SaveSystem {
	private dbName = "AstroHarvest";
	private dbVersion = 1;
	private db: IDBDatabase | null = null;

	// Separate object stores for different data types
	private stores = {
		player: "player",
		plots: "plots",
		settings: "settings",
		metadata: "metadata",
	};

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

				// Create separate object stores for different data types
				if (!db.objectStoreNames.contains(this.stores.player)) {
					db.createObjectStore(this.stores.player, { keyPath: "id" });
				}
				if (!db.objectStoreNames.contains(this.stores.plots)) {
					db.createObjectStore(this.stores.plots, { keyPath: "id" });
				}
				if (!db.objectStoreNames.contains(this.stores.settings)) {
					db.createObjectStore(this.stores.settings, { keyPath: "key" });
				}
				if (!db.objectStoreNames.contains(this.stores.metadata)) {
					db.createObjectStore(this.stores.metadata, { keyPath: "key" });
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

			const transaction = this.db.transaction(
				[
					this.stores.player,
					this.stores.plots,
					this.stores.settings,
					this.stores.metadata,
				],
				"readwrite"
			);

			// Save player data
			const playerStore = transaction.objectStore(this.stores.player);
			playerStore.put({ id: "main", ...gameState.player });

			// Save plots data
			const plotsStore = transaction.objectStore(this.stores.plots);
			gameState.plots.forEach((plot) => {
				plotsStore.put(plot);
			});

			// Save settings (dev tools state)
			const settingsStore = transaction.objectStore(this.stores.settings);
			settingsStore.put({ key: "devTools", value: gameState.devTools });

			// Save metadata
			const metadataStore = transaction.objectStore(this.stores.metadata);
			metadataStore.put({
				key: "gameInfo",
				value: {
					lastSaveTime: gameState.lastSaveTime,
					version: "2.0.0",
					timestamp: Date.now(),
				},
			});

			transaction.oncomplete = () => {
				resolve(true);
			};

			transaction.onerror = () => {
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

			const transaction = this.db.transaction(
				[
					this.stores.player,
					this.stores.plots,
					this.stores.settings,
					this.stores.metadata,
				],
				"readonly"
			);

			let playerData: PlayerState | null = null;
			let plotsData: PlotState[] = [];
			let devToolsData: any = null;
			let metadata: any = null;
			let completedRequests = 0;
			const totalRequests = 4;

			const checkComplete = () => {
				completedRequests++;
				if (completedRequests === totalRequests) {
					if (playerData && devToolsData && metadata) {
						// Calculate offline progress
						const offlineTime = Date.now() - metadata.value.timestamp;
						const gameState: GameState = {
							player: playerData,
							plots: plotsData,
							lastSaveTime: metadata.value.lastSaveTime,
							devTools: devToolsData,
						};

						const updatedGameState = this.calculateOfflineProgress(
							gameState,
							offlineTime
						);
						resolve(updatedGameState);
					} else {
						resolve(null);
					}
				}
			};

			// Load player data
			const playerStore = transaction.objectStore(this.stores.player);
			const playerRequest = playerStore.get("main");
			playerRequest.onsuccess = () => {
				playerData = playerRequest.result;
				checkComplete();
			};
			playerRequest.onerror = () => {
				reject(new Error("Failed to load player data"));
			};

			// Load plots data
			const plotsStore = transaction.objectStore(this.stores.plots);
			const plotsRequest = plotsStore.getAll();
			plotsRequest.onsuccess = () => {
				plotsData = plotsRequest.result;
				checkComplete();
			};
			plotsRequest.onerror = () => {
				reject(new Error("Failed to load plots data"));
			};

			// Load settings data
			const settingsStore = transaction.objectStore(this.stores.settings);
			const settingsRequest = settingsStore.get("devTools");
			settingsRequest.onsuccess = () => {
				devToolsData = settingsRequest.result?.value || {
					enabled: false,
					timeMultiplier: 1,
					timersPaused: false,
				};
				checkComplete();
			};
			settingsRequest.onerror = () => {
				reject(new Error("Failed to load settings data"));
			};

			// Load metadata
			const metadataStore = transaction.objectStore(this.stores.metadata);
			const metadataRequest = metadataStore.get("gameInfo");
			metadataRequest.onsuccess = () => {
				metadata = metadataRequest.result;
				checkComplete();
			};
			metadataRequest.onerror = () => {
				reject(new Error("Failed to load metadata"));
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
			const growthProgress = effectiveOfflineTime / plot.crop.growthTime; // growthTime is already in milliseconds

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

			const transaction = this.db.transaction(
				[
					this.stores.player,
					this.stores.plots,
					this.stores.settings,
					this.stores.metadata,
				],
				"readwrite"
			);

			// Clear all object stores
			const playerStore = transaction.objectStore(this.stores.player);
			playerStore.clear();

			const plotsStore = transaction.objectStore(this.stores.plots);
			plotsStore.clear();

			const settingsStore = transaction.objectStore(this.stores.settings);
			settingsStore.clear();

			const metadataStore = transaction.objectStore(this.stores.metadata);
			metadataStore.clear();

			transaction.oncomplete = () => {
				resolve(true);
			};

			transaction.onerror = () => {
				reject(new Error("Failed to delete save"));
			};
		});
	}

	public async clearAllData(): Promise<boolean> {
		if (!this.db) {
			await this.initialize();
		}

		return new Promise((resolve, reject) => {
			if (!this.db) {
				reject(new Error("Database not initialized"));
				return;
			}

			// Close current database connection
			this.db.close();

			// Delete the entire database
			const deleteRequest = indexedDB.deleteDatabase(this.dbName);

			deleteRequest.onsuccess = () => {
				console.log("Database cleared successfully");
				this.db = null;
				resolve(true);
			};

			deleteRequest.onerror = () => {
				reject(new Error("Failed to clear database"));
			};

			deleteRequest.onblocked = () => {
				console.warn("Database deletion blocked - please close other tabs");
				reject(new Error("Database deletion blocked"));
			};
		});
	}
}
