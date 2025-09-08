import { Graphics, Text, TextStyle, Container } from "pixi.js";
import type { PlayerState } from "@/types/game";

// UI component for displaying player stats
export class PlayerStatsUI extends Container {
	private background: Graphics;
	private creditsText: Text;
	private xpText: Text;
	private levelText: Text;
	private seedsText: Text;
	private inventoryText: Text;

	constructor() {
		super();
		this.x = 10;
		this.y = 10;

		this.background = new Graphics();
		this.addChild(this.background);

		this.creditsText = new Text({
			text: "Credits: 0",
			style: new TextStyle({
				fontSize: 16,
				fontWeight: "bold",
				fill: 0x00ff00,
			}),
		});
		this.creditsText.x = 10;
		this.creditsText.y = 10;
		this.addChild(this.creditsText);

		this.xpText = new Text({
			text: "XP: 0",
			style: new TextStyle({
				fontSize: 14,
				fill: 0xffffff,
			}),
		});
		this.xpText.x = 10;
		this.xpText.y = 35;
		this.addChild(this.xpText);

		this.levelText = new Text({
			text: "Level: 1",
			style: new TextStyle({
				fontSize: 14,
				fill: 0xffffff,
			}),
		});
		this.levelText.x = 10;
		this.levelText.y = 55;
		this.addChild(this.levelText);

		this.seedsText = new Text({
			text: "Seeds: 0",
			style: new TextStyle({
				fontSize: 14,
				fill: 0xffffff,
			}),
		});
		this.seedsText.x = 10;
		this.seedsText.y = 75;
		this.addChild(this.seedsText);

		this.inventoryText = new Text({
			text: "Inventory: 0",
			style: new TextStyle({
				fontSize: 14,
				fill: 0xffffff,
			}),
		});
		this.inventoryText.x = 10;
		this.inventoryText.y = 95;
		this.addChild(this.inventoryText);

		this.updateBackground();
	}

	public updateStats(player: PlayerState): void {
		this.creditsText.text = `Credits: ${player.credits}`;
		this.xpText.text = `XP: ${player.xp}`;
		this.levelText.text = `Level: ${player.level}`;

		// Calculate total seeds
		const totalSeeds = Object.values(player.seeds).reduce(
			(sum, count) => sum + count,
			0
		);
		this.seedsText.text = `Seeds: ${totalSeeds}`;

		// Calculate total inventory items
		const totalInventory = Object.values(player.inventory).reduce(
			(sum, count) => sum + count,
			0
		);
		this.inventoryText.text = `Inventory: ${totalInventory}`;

		this.updateBackground();
	}

	private updateBackground(): void {
		this.background.clear();

		// Calculate background size based on content
		const padding = 10;
		const width = Math.max(200, this.creditsText.width + padding * 2);
		const height = 120; // Increased to accommodate inventory text

		this.background
			.rect(0, 0, width, height)
			.fill({ color: 0x000000, alpha: 0.7 })
			.stroke({ color: 0xffffff, width: 1 });
	}
}
