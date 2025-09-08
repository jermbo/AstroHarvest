import { Graphics, Text, TextStyle, Container } from "pixi.js";
import type { CropDefinition } from "@/types/game";

// Modal for selecting seeds to plant
export class SeedSelectionModal extends Container {
	private background!: Graphics;
	private title!: Text;
	private seedButtons: SeedButton[] = [];
	private onSeedSelected?: (cropId: string) => void;
	private onClose?: () => void;

	constructor(
		availableSeeds: {
			cropId: string;
			quantity: number;
			definition: CropDefinition;
		}[],
		playerCredits: number
	) {
		super();
		this.visible = false;

		this.createBackground();
		this.createTitle();
		this.createSeedButtons(availableSeeds, playerCredits);
		this.setupEventHandlers();
	}

	private createBackground(): void {
		this.background = new Graphics();
		this.background
			.rect(0, 0, 400, 300)
			.fill({ color: 0x2c2c2c, alpha: 0.95 })
			.stroke({ color: 0xffffff, width: 2 });
		this.addChild(this.background);
	}

	private createTitle(): void {
		this.title = new Text({
			text: "Select Seed to Plant",
			style: new TextStyle({
				fontSize: 20,
				fontWeight: "bold",
				fill: 0xffffff,
				align: "center",
			}),
		});
		this.title.anchor.set(0.5);
		this.title.x = 200;
		this.title.y = 30;
		this.addChild(this.title);
	}

	private createSeedButtons(
		availableSeeds: {
			cropId: string;
			quantity: number;
			definition: CropDefinition;
		}[],
		playerCredits: number
	): void {
		const buttonWidth = 150;
		const buttonHeight = 80;
		const spacing = 20;
		const startX = 50;
		const startY = 80;

		availableSeeds.forEach((seed, index) => {
			const x = startX + (index % 2) * (buttonWidth + spacing);
			const y = startY + Math.floor(index / 2) * (buttonHeight + spacing);

			const canAfford = playerCredits >= seed.definition.buyPrice;
			const hasSeeds = seed.quantity > 0;

			const button = new SeedButton(
				seed.definition,
				seed.quantity,
				canAfford && hasSeeds
			);
			button.x = x;
			button.y = y;

			button.setOnClick(() => {
				if (canAfford && hasSeeds) {
					this.onSeedSelected?.(seed.cropId);
					this.hide();
				}
			});

			this.seedButtons.push(button);
			this.addChild(button);
		});
	}

	private setupEventHandlers(): void {
		// Close modal when clicking outside
		this.background.interactive = true;
		this.background.on("pointerdown", (event) => {
			event.stopPropagation();
		});

		// Add close button
		const closeButton = new Container();
		closeButton.x = 350;
		closeButton.y = 10;
		closeButton.interactive = true;
		closeButton.cursor = "pointer";

		const closeButtonBg = new Graphics();
		closeButtonBg
			.rect(0, 0, 30, 30)
			.fill({ color: 0xff0000 })
			.stroke({ color: 0xffffff, width: 1 });
		closeButton.addChild(closeButtonBg);

		const closeText = new Text({
			text: "×",
			style: new TextStyle({
				fontSize: 20,
				fontWeight: "bold",
				fill: 0xffffff,
				align: "center",
			}),
		});
		closeText.anchor.set(0.5);
		closeText.x = 15;
		closeText.y = 15;
		closeButton.addChild(closeText);

		closeButton.on("pointerdown", () => {
			this.onClose?.();
			this.hide();
		});

		this.addChild(closeButton);
	}

	public setOnSeedSelected(callback: (cropId: string) => void): void {
		this.onSeedSelected = callback;
	}

	public setOnClose(callback: () => void): void {
		this.onClose = callback;
	}

	public show(): void {
		this.visible = true;
	}

	public hide(): void {
		this.visible = false;
	}

	public centerOnScreen(screenWidth: number, screenHeight: number): void {
		this.x = (screenWidth - this.background.width) / 2;
		this.y = (screenHeight - this.background.height) / 2;
	}
}

// Individual seed button component
class SeedButton extends Container {
	private background: Graphics;
	private cropName: Text;
	private priceText: Text;
	private quantityText: Text;
	private enabled: boolean;

	constructor(definition: CropDefinition, quantity: number, enabled: boolean) {
		super();
		this.enabled = enabled;

		this.background = new Graphics();
		this.addChild(this.background);

		this.cropName = new Text({
			text: definition.displayName,
			style: new TextStyle({
				fontSize: 14,
				fontWeight: "bold",
				fill: enabled ? 0xffffff : 0x666666,
				align: "center",
			}),
		});
		this.cropName.anchor.set(0.5);
		this.cropName.x = 75;
		this.cropName.y = 20;
		this.addChild(this.cropName);

		this.priceText = new Text({
			text: `$${definition.buyPrice}`,
			style: new TextStyle({
				fontSize: 12,
				fill: enabled ? 0x00ff00 : 0x666666,
				align: "center",
			}),
		});
		this.priceText.anchor.set(0.5);
		this.priceText.x = 75;
		this.priceText.y = 40;
		this.addChild(this.priceText);

		this.quantityText = new Text({
			text: `Qty: ${quantity}`,
			style: new TextStyle({
				fontSize: 10,
				fill: enabled ? 0xffffff : 0x666666,
				align: "center",
			}),
		});
		this.quantityText.anchor.set(0.5);
		this.quantityText.x = 75;
		this.quantityText.y = 60;
		this.addChild(this.quantityText);

		this.interactive = enabled;
		this.cursor = enabled ? "pointer" : "default";

		this.updateVisuals();
		this.setupEventHandlers();
	}

	private updateVisuals(): void {
		this.background.clear();
		this.background
			.rect(0, 0, 150, 80)
			.fill({
				color: this.enabled ? 0x4a4a4a : 0x2a2a2a,
				alpha: this.enabled ? 1 : 0.5,
			})
			.stroke({
				color: this.enabled ? 0xffffff : 0x666666,
				width: 1,
			});
	}

	private setupEventHandlers(): void {
		if (this.enabled) {
			this.on("pointerover", () => {
				this.background.clear();
				this.background
					.rect(0, 0, 150, 80)
					.fill({ color: 0x5a5a5a })
					.stroke({ color: 0xffffff, width: 2 });
			});

			this.on("pointerout", () => {
				this.updateVisuals();
			});
		}
	}

	public setOnClick(callback: () => void): void {
		if (this.enabled) {
			this.on("pointerdown", callback);
		}
	}
}
