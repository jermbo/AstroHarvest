# 🌌 AstroHarvest: A Futurama-Inspired Idle Farming Game

**AstroHarvest** is a web-based idle farming game that combines the cozy charm of _Stardew Valley_, the farming loop of _Farmville_, and the absurd humor of _Futurama_.

You’ll manage a futuristic farm on a strange alien world: clearing debris, planting crops, crafting machines, and selling quirky goods at the Intergalactic Market. Designed for **short, chill play sessions (5–10 minutes)**, the game rewards players who return later to harvest their crops and collect crafted items.

## 🌱 Core Gameplay Loop

1. **Clean & Gather** → Clear weeds, rocks, and junk to gather raw materials.
2. **Plant** → Till soil, plant seeds, and water crops.
3. **Wait (Idle)** → Crops grow in real-world time.
4. **Harvest** → Collect crops when they’re ready.
5. **Craft** →
   - **Construction Crafting**: Build barrels, tools, and machines.
   - **Production Crafting**: Use those machines to turn crops into higher-value goods.
6. **Sell / Trade** → Convert goods into credits at the Intergalactic Market.
7. **Upgrade & Expand** → Buy more land, tools, and eventually expand to other planets.

## 🎯 MVP Scope

- **Seeds (5 types)**: Starter set of quirky alien crops.
- **Crafts (5 products)**: Simple recipes using barrels and other tools.
- **Raw Materials**: Gathered from cleaning debris (wood, stone, minerals).
- **Tools**: HoeBot-9000, watering can, basic miner, starter axe.
- **Crafting Stations**: Barrels, fermenters, and simple machines for production.
- **Market**: Always-open with fixed prices for seeds, tools, and selling goods.
- **Offline-First**: Progress saved locally—play on the same device anytime.

## 🔮 Future Expansions

- **Planetary Farming**: Buy land on alien worlds with unique crops.
- **Advanced Crafting**: Multi-step recipes like Plasma Wine or Nano-Bread.
- **Events**: Farmers’ Markets with quirky NPCs and rare goods.
- **Dynamic Economy**: Prices shift with demand or planetary events.
- **Automation**: Robot helpers that water, harvest, or craft automatically.

## ✨ Tone & Aesthetic

- **Visuals**: 16-bit pixel art with vibrant, spacey colors.
- **Tone**: Cozy farming + absurd sci-fi humor.
- **Inspiration**: _Futurama_'s wit and _Stardew Valley_'s charm.

## 🚀 Current Status

**Version 0.1.0 - "First Plant" - IN DEVELOPMENT**

### ✅ Completed Features

- **Core Game Engine**: Complete farming simulation system
- **Plot Management**: 3x3 farm grid with full state management
- **Advanced Storage**: IndexedDB with LocalStorage fallback
- **Throttled Saves**: Optimized save system (15-second intervals)
- **Visual Farm Grid**: Interactive Pixi.js-based farm interface
- **Crop Growth**: 5-minute growth cycle for Quantum Blueberries
- **Offline Progress**: Timestamp-based catch-up system

### 🎮 How to Play (Current Build)

1. **Start the game**: `npm run dev`
2. **Plant crops**: Click empty plots or use "Plant" button
3. **Wait for growth**: Crops mature in 5 minutes
4. **Harvest**: Click ready plots or use "Harvest" button
5. **Automatic saves**: Game saves every 15 seconds

### 🛠️ Technical Stack

- **Engine**: Pixi.js 8.x with TypeScript
- **Storage**: IndexedDB (primary) + LocalStorage (fallback)
- **Architecture**: Modular game systems with clean separation
- **Performance**: Throttled saves, efficient rendering

## 📋 Documentation

- **[Development Roadmap](./ROADMAP.md)** - Version timeline, milestones, and success metrics
- **[Development Backlog](./DEVELOPMENT_BACKLOG.md)** - Detailed feature breakdown
- **[Storage System Upgrade](./docs/STORAGE-SYSTEM-UPGRADE.md)** - Advanced persistence documentation
- **[T-001 Implementation Summary](./docs/T-001-IMPLEMENTATION-SUMMARY.md)** - Core system implementation details
