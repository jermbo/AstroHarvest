import type { CropState, PlotState } from "@/types/game";

// Timer system for crop growth with offline progress calculation
export class TimerSystem {
	private timers: Map<string, number> = new Map();
	private lastUpdateTime: number = Date.now();

	public startTimer(plotId: string, growthTimeMs: number): void {
		this.timers.set(plotId, growthTimeMs);
		this.lastUpdateTime = Date.now();
	}

	public updateTimers(
		plots: PlotState[],
		timeMultiplier: number = 1,
		timersPaused: boolean = false
	): PlotState[] {
		const currentTime = Date.now();
		const deltaTime = timersPaused
			? 0
			: (currentTime - this.lastUpdateTime) * timeMultiplier;
		this.lastUpdateTime = currentTime;

		return plots.map((plot) => {
			if (!plot.crop || plot.status === "ready" || plot.status === "empty") {
				return plot;
			}

			// Transition from "planted" to "growing" immediately
			if (plot.status === "planted") {
				return {
					...plot,
					status: "growing" as const,
				};
			}

			const remainingTime = this.timers.get(plot.id) || 0;
			const newRemainingTime = Math.max(0, remainingTime - deltaTime);

			this.timers.set(plot.id, newRemainingTime);

			if (newRemainingTime <= 0 && plot.status === "growing") {
				return {
					...plot,
					status: "ready" as const,
				};
			}

			return plot;
		});
	}

	public getRemainingTime(plotId: string): number {
		return this.timers.get(plotId) || 0;
	}

	public calculateOfflineProgress(
		plot: PlotState,
		offlineTimeMs: number,
		timeMultiplier: number = 1
	): PlotState {
		if (!plot.crop || plot.status === "ready" || plot.status === "empty") {
			return plot;
		}

		const effectiveOfflineTime = offlineTimeMs * timeMultiplier;
		const growthProgress = effectiveOfflineTime / plot.crop.growthTime; // growthTime is already in milliseconds

		if (growthProgress >= 1) {
			return {
				...plot,
				status: "ready",
			};
		}

		return plot;
	}

	public pauseTimer(plotId: string): void {
		// Timer pause is handled in updateTimers method
	}

	public resumeTimer(plotId: string): void {
		// Timer resume is handled in updateTimers method
	}

	public clearTimer(plotId: string): void {
		this.timers.delete(plotId);
	}

	public getFormattedTime(ms: number): string {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	}
}
