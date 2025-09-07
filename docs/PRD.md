# AstroHarvest – Product Requirements Document (PRD)

## 1. Overview

AstroHarvest is a humorous sci-fi idle farming game with a **16-bit pixel aesthetic**. Players farm alien crops, gather raw materials, craft tools and machines, and sell goods at the Intergalactic Market.
Target platform: **Web (mobile-first, offline by default)**.

## 2. Goals

- Deliver a **fun-first MVP** that works in short play sessions.
- Provide variety with **5 crops and 5 crafts** from day one.
- Implement **two-tier crafting**:
  1. **Construction Crafting** → building tools & machines.
  2. **Production Crafting** → using machines to process crops.
- Keep everything **offline and expandable**.

## 3. Core Gameplay Loop

1. **Clean & Gather**
   - Clear weeds, branches, and rocks from your farm.
   - Collect raw resources: wood, stone, minerals.

2. **Planting**
   - Till soil with HoeBot.
   - Plant seeds bought at the market.
   - Optionally water crops for bonuses.

3. **Idle Growth**
   - Crops grow in real-world time.
   - Growth speed depends on crop type and watering.

4. **Harvesting**
   - Collect grown crops.
   - Harvest yields raw produce.

5. **Crafting**
   - **Construction Crafting**: Build barrels, fermenters, or machines using wood, stone, minerals.
   - **Production Crafting**: Use those machines to turn crops into goods (e.g., berries → jam).

6. **Market Transactions**
   - Always-open market with fixed prices.
   - Sell goods for credits.
   - Buy seeds, basic tools, and starter machines.

7. **Expansion**
   - Use credits/minerals to unlock more plots, machines, and eventually other planets.

## 4. MVP Scope

### Crops (Seeds)

- Quantum Blueberries
- Strawboids
- Plasmatoes
- AstroGrapes
- Nebula Wheat

### Crafted Goods (Production Crafting)

- Jam (berries → jam barrel).
- Space Wine (grapes → wine barrel).
- Bread (wheat → oven).
- Mineral Blocks (minerals → smelter).
- Fruit Juice (mixed fruits → juicer).

### Resources

- **Credits** (currency).
- **Wood / Stone / Minerals** (from clearing farm debris).
- **Seeds** (purchased at market).

### Tools

- HoeBot-9000 (till soil).
- Watering Can (boost crop growth).
- Basic Axe (clear branches).
- Pickaxe (break rocks, collect minerals).
- Starter Miner (slowly generates minerals over time).

### Crafting Stations (Construction Crafting)

- Jam Barrel.
- Wine Barrel.
- Oven.
- Smelter.
- Juicer.

## 5. Progression & Timing

- **Early Crops**: 3–5 min growth (quick feedback).
- **Mid Crops**: 30–60 min growth (idle loop).
- **Advanced Crops**: Multi-hour growth (future expansion).
- **Crafting**:
  - Jam = ~15 min.
  - Wine = ~2 hours.
  - Bread = ~30 min.
  - Smelting = ~1 hour.
  - Juicing = ~20 min.

## 6. Future Expansion Ideas

- Multi-planet farming (unique climates, crops).
- Special events (Farmers’ Markets, galactic fairs).
- NPC traders with personality quirks and bonus deals.
- Dynamic economy (price shifts, rare demand events).
- Automation (robot helpers, conveyor belts).

## 7. Tone & Aesthetic

- **Visuals**: 16-bit cozy pixel art meets sci-fi absurdity.
- **Humor**: Futurama-inspired dialogue, item names, and events.
- **Examples**:
  - “Ferment-O-Matic 3000” jam barrel.
  - “Plasmato” crop: tomato that glows faintly radioactive.
  - NPC: Zorbulon the Pickle Baron, demanding weird goods.

## 8. Technical Notes

- **Tech stack**: HTML, CSS, JavaScript, Pixi.js.
- **Save system**: IndexedDB (offline-first).
- **UI**: Touch-friendly, bright retro buttons.
- **Data-driven**: Crops, recipes, and tools defined in JSON for easy expansion.

## 9. Success Criteria

- MVP is **fun in short sessions (5–10 minutes)**.
- Players always feel progress (crops grown, goods crafted).
- Cleaning + planting + crafting loop feels satisfying.
- Systems are modular enough to expand without major refactoring.
