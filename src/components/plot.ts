import { Graphics, Text, TextStyle, Container } from "pixi.js";
import type { PlotState } from "@/types/game";

// Visual component for a single plot
export class PlotComponent extends Container {
	private plotGraphics: Graphics;
	private statusText: Text;
	private progressBar: Graphics;
	private plotState: PlotState;
	private onClickCallback?: (plot: PlotState) => void;

	constructor(plotState: PlotState) {
		super();
		this.plotState = plotState;
		this.x = plotState.position.x;
		this.y = plotState.position.y;

		this.plotGraphics = new Graphics();
		this.addChild(this.plotGraphics);

		this.progressBar = new Graphics();
		this.addChild(this.progressBar);

		this.statusText = new Text({
			text: "",
			style: new TextStyle({
				fontSize: 12,
				fontWeight: "bold",
				fill: 0xffffff,
				align: "center",
			}),
		});
		this.statusText.anchor.set(0.5);
		this.statusText.x = 32; // Center of 64px plot
		this.statusText.y = 32;
		this.addChild(this.statusText);

		this.interactive = true;
		this.cursor = "pointer";

		this.setupEventHandlers();
		this.updateVisuals();
	}

	private setupEventHandlers(): void {
		this.on("pointerdown", () => {
			this.onClickCallback?.(this.plotState);
		});

		this.on("pointerover", () => {
			this.scale.set(1.05);
		});

		this.on("pointerout", () => {
			this.scale.set(1.0);
		});
	}

	public updatePlotState(newState: PlotState): void {
		this.plotState = newState;
		this.updateVisuals();
	}

	public setOnClick(callback: (plot: PlotState) => void): void {
		this.onClickCallback = callback;
	}

	private updateVisuals(): void {
		this.plotGraphics.clear();
		this.progressBar.clear();

		// Draw plot background based on status
		const colors: Record<string, number> = {
			empty: 0x8b4513, // Brown
			planted: 0x654321, // Dark brown
			growing: 0x228b22, // Forest green
			ready: 0xffd700, // Gold
		};

		this.plotGraphics
			.rect(0, 0, 64, 64)
			.fill({ color: colors[this.plotState.status] })
			.stroke({ color: 0x000000, width: 2 });

		// Draw progress bar for growing crops
		if (this.plotState.status === "growing" && this.plotState.crop) {
			const progress = this.calculateGrowthProgress();
			const barWidth = 60;
			const barHeight = 6;
			const barX = 2;
			const barY = 56;

			// Background bar
			this.progressBar
				.rect(barX, barY, barWidth, barHeight)
				.fill({ color: 0x333333 });

			// Progress bar
			this.progressBar
				.rect(barX, barY, barWidth * progress, barHeight)
				.fill({ color: 0x00ff00 });
		}

		// Update status text
		this.updateStatusText();
	}

	private calculateGrowthProgress(): number {
		if (!this.plotState.crop || this.plotState.status !== "growing") {
			return 0;
		}

		const elapsed = Date.now() - this.plotState.plantedAt!;
		const total = this.plotState.crop.growthTime * 1000;
		return Math.min(elapsed / total, 1);
	}

	private updateStatusText(): void {
		switch (this.plotState.status) {
			case "empty":
				this.statusText.text = "PLANT";
				this.statusText.style.fill = 0xffffff;
				break;
			case "planted":
				this.statusText.text = "PLANTED";
				this.statusText.style.fill = 0xffffff;
				break;
			case "growing":
				if (this.plotState.crop) {
					const remaining =
						this.plotState.crop.growthTime * 1000 -
						(Date.now() - this.plotState.plantedAt!);
					const minutes = Math.ceil(remaining / 60000);
					this.statusText.text = `${minutes}m`;
					this.statusText.style.fill = 0xffffff;
				}
				break;
			case "ready":
				this.statusText.text = "HARVEST";
				this.statusText.style.fill = 0x000000;
				break;
		}
	}

	public getPlotState(): PlotState {
		return this.plotState;
	}
}
