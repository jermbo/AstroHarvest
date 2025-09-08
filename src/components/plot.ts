import { Graphics, Text, TextStyle, Container } from "pixi.js";
import type { PlotState } from "@/types/game";
import { getCropDefinition } from "@/data/crops";

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

		// Draw plot background (always brown soil)
		this.plotGraphics
			.rect(0, 0, 64, 64)
			.fill({ color: 0x8b4513 }) // Brown soil
			.stroke({ color: 0x000000, width: 2 });

		// Draw crop visual stages
		if (this.plotState.crop) {
			this.drawCropVisualStage();
		}

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

	private drawCropVisualStage(): void {
		if (!this.plotState.crop) return;

		const progress = this.calculateGrowthProgress();
		const centerX = 32;
		const centerY = 32;
		const cropType = this.plotState.crop.type;

		// Simple growing dot from 3px to 40px over time
		this.drawGrowingDot(centerX, centerY, cropType, progress);
	}

	private drawGrowingDot(
		centerX: number,
		centerY: number,
		cropType: string,
		progress: number
	): void {
		const cropDefinition = getCropDefinition(cropType);
		const harvestColor = cropDefinition
			? parseInt(cropDefinition.visual.harvestColor)
			: 0x4169e1;

		// Calculate dot size: 3px at 0% progress, 40px at 100% progress
		const minSize = 3;
		const maxSize = 40;
		const dotSize = minSize + progress * (maxSize - minSize);

		// Draw the growing dot
		this.plotGraphics
			.circle(centerX, centerY, dotSize)
			.fill({ color: harvestColor, alpha: 0.8 })
			.stroke({ color: 0x000000, width: 1 });
	}

	private calculateGrowthProgress(): number {
		if (!this.plotState.crop) {
			return 0;
		}

		// For planted status, show 0% progress
		if (this.plotState.status === "planted") {
			return 0;
		}

		// For growing status, calculate actual progress
		if (this.plotState.status === "growing") {
			const elapsed = Date.now() - this.plotState.plantedAt!;
			const total = this.plotState.crop.growthTime; // Already in milliseconds
			return Math.min(elapsed / total, 1);
		}

		// For ready status, show 100% progress
		if (this.plotState.status === "ready") {
			return 1;
		}

		return 0;
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
						this.plotState.crop.growthTime -
						(Date.now() - this.plotState.plantedAt!);

					if (remaining > 60000) {
						// Show minutes if more than 1 minute
						const minutes = Math.ceil(remaining / 60000);
						this.statusText.text = `${minutes}m`;
					} else {
						// Show seconds if less than 1 minute
						const seconds = Math.ceil(remaining / 1000);
						this.statusText.text = `${seconds}s`;
					}
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
