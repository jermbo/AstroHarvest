import { Application, Graphics, Text, TextStyle } from "pixi.js";

(async () => {
	const app = new Application();
	await app.init({
		background: "#1099bb",
		resizeTo: window,
	});
	app.canvas.style.position = "absolute";

	const rectangle = new Graphics()
		.rect(0, 0, 100, 100)
		.fill({ color: 0x0042da });
	app.stage.addChild(rectangle);

	const textStyle = new TextStyle({
		fontSize: 24,
		fontWeight: "bold",
		fill: 0x000000,
	});
	const text = new Text({ text: "Hello, World!", style: textStyle });
	app.stage.addChild(text);

	// Append the canvas to the container
	document.getElementById("pixi-container")!.appendChild(app.canvas);
})();
