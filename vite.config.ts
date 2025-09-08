import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	server: {
		open: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
