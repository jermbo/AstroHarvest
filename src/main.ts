import { AstroHarvestGame } from "@/game/astro-harvest-game";

// Initialize the AstroHarvest game
(async () => {
	try {
		const game = new AstroHarvestGame();
		await game.initialize();

		console.log("AstroHarvest game initialized successfully!");
		console.log(
			"Press Cmd+Shift+D (Mac) or Ctrl+Shift+D (Windows/Linux) to toggle dev tools"
		);

		// Make game globally accessible for debugging
		(window as any).game = game;
	} catch (error) {
		console.error("Failed to initialize AstroHarvest game:", error);
	}
})();
