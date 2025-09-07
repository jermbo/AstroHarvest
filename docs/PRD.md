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

## 9. User Experience & Interface Design

### Core UX Principles

- **Mobile-First**: Touch-friendly interface with 44px minimum touch targets
- **Immediate Feedback**: Every action provides visual/audio confirmation
- **Progressive Disclosure**: Show complexity gradually as players advance
- **Offline-First**: Seamless experience without internet connection

### Key UI Screens

1. **Farm View**: Main gameplay screen with 3x3 plot grid
2. **Market Screen**: Buy/sell interface with clear pricing
3. **Inventory Panel**: Organized by categories (seeds, crops, materials, goods)
4. **Crafting Station**: Visual recipe browser with progress indicators
5. **Settings/Help**: Tutorial, audio controls, save management

### Visual Feedback Systems

- **Particle Effects**: Dirt puffs when planting, sparkles when harvesting
- **Progress Indicators**: Visual timers on plots and crafting stations
- **Notification System**: Toast messages for achievements and errors
- **Animation States**: Smooth transitions between plot states

## 10. Audio Design

### Sound Effects

- **Action Sounds**: Planting (dirt thud), harvesting (pop), crafting (mechanical whir)
- **UI Sounds**: Button clicks, menu transitions, notification chimes
- **Environmental**: Subtle farm ambiance, space-themed background hum

### Audio Accessibility

- **Volume Controls**: Master, SFX, and music sliders
- **Visual Alternatives**: Subtle screen flashes for audio cues
- **Mute Options**: Complete audio disable for quiet environments

## 11. Game Balance & Progression

### Progression Curves

- **Early Game (0-30 min)**: Fast feedback, 5-minute crops, immediate rewards
- **Mid Game (30 min-2 hours)**: Introduction of crafting, 30-60 minute timers
- **Late Game (2+ hours)**: Complex recipes, multi-hour investments, automation

### Retention Mechanics

- **Daily Rewards**: Bonus credits for returning players
- **Achievement System**: Unlock new crops/recipes through milestones
- **Collection Goals**: "Harvest 100 Quantum Blueberries" type challenges

### Balance Targets

- **Session Value**: Each 5-minute session should yield meaningful progress
- **Idle Rewards**: 2+ hour offline time should provide substantial returns
- **Crafting ROI**: Processed goods should be 1.6-2.2x more valuable than raw materials

## 12. Onboarding & Tutorial Design

### First-Time User Experience

1. **Welcome Screen**: Brief game concept explanation
2. **Interactive Tutorial**: Guided first crop planting
3. **Progressive Hints**: Contextual tooltips for new features
4. **Safe Learning**: No penalties for tutorial mistakes

### Help Systems

- **Contextual Help**: "?" buttons on complex screens
- **Recipe Browser**: Visual guide to all crafting possibilities
- **Progress Tracking**: Clear indicators of what's unlocked next

## 13. Success Criteria

- MVP is **fun in short sessions (5–10 minutes)**.
- Players always feel progress (crops grown, goods crafted).
- Cleaning + planting + crafting loop feels satisfying.
- Systems are modular enough to expand without major refactoring.
- **New players can complete first harvest within 2 minutes**.
- **Audio feedback enhances satisfaction without being intrusive**.
- **Mobile interface is fully functional on devices 320px+ wide**.
- **Tutorial completion rate exceeds 80%**.
