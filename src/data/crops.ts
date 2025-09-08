import type { CropDefinition } from "@/types/game";
import cropsData from "./crops.json";

// Load crop catalog from JSON array
const rawCropData = cropsData as any[];

// Convert JSON array to TypeScript interface format and create lookup map
export const CROP_CATALOG: Record<string, CropDefinition> = Object.fromEntries(
	rawCropData.map((crop) => [
		crop.id,
		{
			id: crop.id,
			displayName: crop.display_name,
			growthMinutes: crop.growth_minutes,
			buyPrice: crop.buy_price,
			sellPriceRaw: crop.sell_price_raw,
			yield: crop.yield,
			visual: {
				seedColor: crop.visual.seed_color,
				harvestColor: crop.visual.harvest_color,
				harvestShape: crop.visual.harvest_shape,
				harvestPosition: crop.visual.harvest_position,
			},
		},
	])
);

export const getCropDefinition = (cropId: string): CropDefinition | null => {
	return CROP_CATALOG[cropId] || null;
};

export const getAllCrops = (): CropDefinition[] => {
	return Object.values(CROP_CATALOG);
};
