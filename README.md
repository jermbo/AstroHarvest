# 🌌 AstroHarvest: A Sci-Fi Idle Farming Game

**AstroHarvest** is a web-based idle farming game that combines the cozy charm of _Stardew Valley_, the farming loop of _Farmville_, and the absurd humor of _Futurama_.

Your grandfather, Dr. Zephyr Vex, is retiring and passing his agricultural research lab on to you to keep it in the family. Restore the aging facility, learn from your grandfather's mentorship, and help the New Eden colony achieve food security. Manage an advanced agricultural research lab: repairing circuits, restoring power systems, growing crops in vertical pods, building specialized bots, and selling goods to the local market. Designed for **short, chill play sessions (5–10 minutes)**, the game rewards players who return later to harvest their crops and collect crafted items.

## 🌱 Core Gameplay Loop

1. **Lab Maintenance & Repair** → Fix broken circuits, replace burnt-out light bulbs, unclog nutrient tubes, and repair damaged equipment to gather raw materials.
2. **Research & Development** → Research new bot types and farm technologies. Unlock higher pod levels and environmental systems.
3. **Manual Farming (Early Game)** → Plant seeds in vertical growing pods. Water crops across multiple levels. Harvest mature crops manually.
4. **Bot Construction & Automation** → Start with HELIX (Administrative Bot) as your central hub for research and management. Build specialized farming bots for different tasks. Automate planting, watering, and harvesting. Manage bot energy and maintenance.
5. **Idle Growth & Environmental Control** → Crops grow in real-world time. Growth speed depends on crop type, watering, and environmental conditions.
6. **Craft** →
   - **Construction Crafting**: Build bio-processors, synthesis units, and advanced machines.
   - **Production Crafting**: Use those machines to turn crops into higher-value scientific goods.
7. **Sell / Trade** → Convert goods into credits at the Intergalactic Market.
8. **Lab Expansion & Room Unlocking** → Build new dome rooms, unlock specialized lab sections, and eventually expand to other planets.

## 🎯 MVP Scope

- **Lab Dome System**: Main lab dome with specialized rooms and dome expansion
- **Vertical Farm System**: 4-level growing pods with environmental control
- **Seeds (5 types)**: Starter set of quirky alien crops with level requirements
- **Bot System**: HELIX (Administrative Bot) plus specialized farming bots for planting, watering, harvesting, and maintenance
- **Research System**: Unlock new technologies, bot types, and lab improvements
- **Crafts (5 products)**: Advanced scientific goods using bio-processors and synthesis units
- **Raw Materials**: Gathered from lab maintenance (electronic components, power cells, minerals)
- **Bot Components**: Materials for bot construction and upgrades
- **Research Materials**: Resources for unlocking new technologies
- **Crafting Stations**: Bio-processors, synthesis units, and advanced scientific equipment
- **Market**: Always-open with fixed prices for seeds, tools, and selling goods
- **Offline-First**: Progress saved locally—play on the same device anytime

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

### 🛠️ Technical Stack

- **Engine**: Pixi.js 8.x with TypeScript
- **Storage**: IndexedDB (primary)
- **Architecture**: Modular game systems with clean separation
- **Performance**: Throttled saves, efficient rendering

## 📋 Documentation

### **Modular Development Roadmaps**

- **[MVP Core Loop Roadmap](./backlog/mvp-core-loop-roadmap.md)** - Manual → Idle → Harvest → Profit loop with dev tools
- **[Bots & Progression Roadmap](./backlog/bots-progression-roadmap.md)** - Automation and advancement systems
- **[Jobs & NPC Foundation Roadmap](./backlog/jobs-npc-foundation-roadmap.md)** - Community and task management
- **[Storyline & Narrative Roadmap](./backlog/storyline-narrative-roadmap.md)** - Family legacy and colony restoration story
- **[Integration Guide](./backlog/modular-roadmap-integration-guide.md)** - How to combine roadmaps for development

### **Technical Documentation**

- **[Game Architecture](./docs/TDD-GameArchitecture.md)** - Core system architecture and design
- **[Dev Tools System](./docs/TDD-DevTools-System.md)** - In-game debugging and testing tools
- **[Storage System Upgrade](./docs/TDD-StorageSystemUpgrade.md)** - Advanced persistence documentation
- **[Performance Optimization](./docs/TDD-Performance-Optimization-Requirements.md)** - Mobile optimization and performance
- **[Player Progression System](./docs/TDD-Player-Progression-System.md)** - XP, levels, and advancement mechanics

## Side Goals for the App

The tide is shifting in the world of development, with AI advancements making a significant impact. As a developer, I'm curious about what this means for my craft and career. This project is an exploration into "Vibe Coding", its significance, practicality, and potential to change software development as we know it.

I want to gain insight into how coding assistants work, how they can be integrated into our workflow, and whether they'll make me more capable or redundant. By diving deeper into this technology, I'm aiming to stay ahead of the curve and unlock its full potential, which will ultimately benefit my own projects, including an idle game I've been wanting to build for a long time now.
