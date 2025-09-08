import type { CropDefinition } from "@/types/game";

// Crop catalog for AstroHarvest
export const CROP_CATALOG: Record<string, CropDefinition> = {
	"crop.quantum_blueberry": {
		id: "crop.quantum_blueberry",
		displayName: "Quantum Blueberries",
		growthMinutes: 5,
		buyPrice: 5,
		sellPriceRaw: 8,
		yield: { min: 1, max: 2 },
	},
};

export const getCropDefinition = (cropId: string): CropDefinition | null => {
	return CROP_CATALOG[cropId] || null;
};

export const getAllCrops = (): CropDefinition[] => {
	return Object.values(CROP_CATALOG);
};
