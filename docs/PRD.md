# AstroHarvest – Product Requirements Document (PRD)

## 1. Overview

AstroHarvest is a humorous sci-fi idle farming game with a **16-bit pixel aesthetic**. Players inherit their grandfather's agricultural research lab on the remote moon of New Eden, restore the aging facility, and help the struggling colony achieve food security through advanced vertical farming and bot automation.
Target platform: **Web (mobile-first, offline by default)**.

## 2. Goals

- Deliver a **fun-first MVP** that works in short play sessions.
- Focus on the **plant → harvest → craft → sell** core loop with deep crafting system.
- Implement **two-tier crafting**:
  1. **Construction Crafting** → building tools & machines.
  2. **Production Crafting** → using machines to process crops.
- Create **meaningful progression** from manual labor to full automation.
- Establish **family legacy story** with Dr. Zephyr Vex's mentorship.
- Use **maintenance mechanics** as primary retention hook (circuit repair, bulb changes, tube cleaning).
- Keep everything **offline and expandable**.

## 3. Core Gameplay Loop

1. **Lab Maintenance & Repair**
   - Fix broken circuits, replace burnt-out light bulbs, unclog nutrient tubes.
   - Repair damaged power systems, clean air filters, calibrate sensors.
   - Collect raw resources: electronic components, power cells, minerals.
   - Restore lab functionality and unlock new capabilities.

2. **Research & Development**
   - Research new bot types and farm technologies.
   - Unlock higher pod levels and environmental systems.
   - Plan automation progression and lab expansion.

3. **Manual Farming (Early Game)**
   - Plant seeds in vertical growing pods within lab domes.
   - Water crops across multiple levels.
   - Harvest mature crops manually.

4. **Bot Construction & Automation**
   - Start with HELIX (Administrative Bot) as your central hub for research and management.
   - Build specialized farming bots for different tasks.
   - Automate planting, watering, and harvesting.
   - Manage bot energy and maintenance.

5. **Idle Growth & Environmental Control**
   - Crops grow in real-world time.
   - Growth speed depends on crop type, watering, and environmental conditions.
   - Manage climate, lighting, and nutrient systems within lab domes.

6. **Crafting & Production**
   - **Construction Crafting**: Build bio-processors, fermentation chambers, or synthesis units using electronic components, power cells, minerals.
   - **Production Crafting**: Use those machines to turn crops into advanced goods (e.g., berries → nutrient concentrate).

7. **Market Transactions**
   - Always-open market with fixed prices.
   - Sell goods for credits.
   - Buy seeds, bot components, and research materials.

8. **Lab Expansion & Room Unlocking**
   - Use credits/materials to unlock new dome rooms and specialized lab sections.
   - Build additional domes for different crop types or environmental conditions.
   - Research cross-planet technologies and advanced automation.

## 4. MVP Scope

### Lab Dome System

- **Main Lab Dome**: Starting location with basic growing pods and research facilities
- **Room Unlocking**: Unlock specialized rooms (power room, water treatment, bot workshop)
- **Dome Expansion**: Build additional domes for different crop types or environmental conditions
- **Environmental Isolation**: Each dome can have different climate and growing conditions

### Vertical Farm System

- **Growing Pods**: 4-level vertical growing chambers within lab domes
- **Environmental Control**: Basic climate, lighting, and nutrient systems
- **Level Restrictions**: Crops have different level requirements based on size

### Crops (Seeds)

- **Quantum Blueberries** (2-4 levels, moderate growth)
- **Strawboids** (1-3 levels, fast growth)
- **Plasmatoes** (3-4 levels, slow growth, high value)
- **AstroGrapes** (4 levels, tree-like, wine production)
- **Nebula Wheat** (1-2 levels, compact, bread production)

### Bot System

- **Administrative Bot**: HELIX (your first bot) - purely administrative hub for research, inventory, messages, job board
- **Farming Bot Types**: Planting, Watering, Harvesting, Maintenance
- **Bot Construction**: Research → Materials → Build → Install
- **Bot Upgrades**: Speed, efficiency, range, intelligence improvements

### Research System

- **Bot Technology**: Unlock new bot types and upgrades
- **Lab Infrastructure**: Room unlocking, dome expansion, environmental systems
- **Crop Science**: Yield optimization, environmental tolerance
- **Automation**: Reduce manual intervention, improve efficiency

### Crafted Goods (Production Crafting)

- **Nutrient Concentrate** (berries → bio-processor)
- **Fermentation Extract** (grapes → fermentation chamber)
- **Protein Synthesis** (wheat → synthesis unit)
- **Mineral Composites** (minerals → molecular forge)
- **Vitamin Solution** (mixed fruits → extraction unit)

### Resources

- **Credits** (currency)
- **Electronic Components** (from repairing lab equipment)
- **Power Cells** (from restoring power systems)
- **Minerals** (from lab maintenance and repair)
- **Bot Components** (for bot construction and upgrades)
- **Research Materials** (for unlocking new technologies)
- **Seeds** (purchased at market).

### Tools

- Circuit Repair Kit (fix broken lab equipment).
- Power Restorer (restore damaged power systems).
- Environmental Scanner (analyze growing conditions).
- Bot Maintenance Kit (repair and upgrade bots).
- Research Terminal (access scientific databases).

### Crafting Stations (Construction Crafting)

- Bio-Processor.
- Fermentation Chamber.
- Synthesis Unit.
- Molecular Forge.
- Extraction Unit.

## 5. Maintenance & Retention Mechanics

### Lab Maintenance System

- **Circuit Repair**: Fix broken electronic circuits and wiring systems
- **Light Bulb Replacement**: Replace burnt-out LED grow lights and system lighting
- **Nutrient Tube Cleaning**: Unclog blocked nutrient delivery tubes and pipes
- **Power System Repair**: Restore damaged power generation and distribution
- **Air Filter Cleaning**: Clean and replace air filtration systems
- **Sensor Calibration**: Recalibrate environmental monitoring sensors
- **Bot Maintenance**: Repair and maintain farming bot systems

### Maintenance Progression

- **Early Game**: Basic maintenance tasks with simple tools
- **Mid Game**: Advanced maintenance with specialized equipment
- **Late Game**: Automated maintenance systems with bot assistance

### Retention Benefits

- **Resource Gathering**: Maintenance provides materials for crafting and upgrades
- **Lab Efficiency**: Well-maintained systems improve crop yields and growth speed
- **Unlock Progression**: Some maintenance tasks unlock new lab capabilities
- **Visual Satisfaction**: Clean, well-maintained lab feels rewarding

## 6. Progression & Timing

### Player Progression System

- **XP Sources**: 2-4 XP per harvest, 4-8 XP per craft, 1-3 XP per maintenance task, 10-50 XP per research
- **Level Requirements**: Every 3-5 levels unlock new crops, every 5-7 levels unlock new bots, every 8-10 levels unlock new rooms
- **Skill Trees**: Research categories (Bot Technology, Farm Infrastructure, Crop Science, Automation, Planetary Expansion)
- **Achievement System**: Harvesting, crafting, bot management, lab maintenance, research, collection, efficiency achievements
- **Long-term Progression**: Deep, meaningful progression that rewards sustained play over months and years
- **Mastery System**: Deep specialization in crop mastery, bot mastery, crafting mastery, research mastery, maintenance mastery

### Crop & Crafting Timing

- **Early Crops**: 3–5 min growth (quick feedback).
- **Mid Crops**: 30–60 min growth (idle loop).
- **Advanced Crops**: Multi-hour growth (future expansion).
- **Crafting**:
  - Nutrient Concentrate = ~15 min.
  - Vitamin Solution = ~20 min.
  - Protein Synthesis = ~30 min.
  - Mineral Composites = ~1 hour.
  - Fermentation Extract = ~2 hours.

## 7. Future Expansion Ideas

- Multi-planet farming (unique climates, crops).
- Special events (Farmers’ Markets, galactic fairs).
- NPC traders with personality quirks and bonus deals.
- Dynamic economy (price shifts, rare demand events).
- Automation (robot helpers, conveyor belts).

## 8. Tone & Aesthetic

- **Visuals**: 16-bit cozy pixel art meets sci-fi absurdity.
- **Humor**: Futurama-inspired dialogue, item names, and events.
- **Examples**:
  - “Ferment-O-Matic 3000” jam barrel.
  - “Plasmato” crop: tomato that glows faintly radioactive.
  - NPC: Zorbulon the Pickle Baron, demanding weird goods.

## 9. Game Challenges & Lab Maintenance

### Lab Maintenance as Core Gameplay

- **System Failures**: Bots break down, crops fail, systems malfunction - these create engaging challenges
- **Recovery Gameplay**: Players repair systems, restore power, fix equipment through strategic gameplay
- **Resource Gathering**: Maintenance tasks provide materials for crafting and upgrades
- **Progressive Difficulty**: Maintenance becomes more complex and rewarding as players advance

### Player Mistake Recovery

- **Resource Recovery**: Players can recover from costly mistakes through sell-back systems and resource exchange
- **Strategic Learning**: Mistakes become learning opportunities with clear recovery paths
- **Forgiveness Systems**: Fair recovery options that don't punish players harshly
- **Second Chances**: Multiple ways to recover from poor decisions

### Game Performance Experience

- **Smooth Gameplay**: Game runs smoothly on mobile devices for extended play sessions
- **Battery Efficiency**: Players can enjoy long gaming sessions without draining device battery
- **Offline Play**: Full game functionality without internet connection
- **Cross-Device Continuity**: Seamless experience across different devices

## 10. User Experience & Interface Design

### Core UX Principles

- **Mobile-First**: Touch-friendly interface with 44px minimum touch targets
- **Immediate Feedback**: Every action provides visual/audio confirmation
- **Progressive Disclosure**: Show complexity gradually as players advance
- **Offline-First**: Seamless experience without internet connection

### Key UI Screens

1. **Lab Dome View**: Main gameplay screen with vertical growing pods
2. **Market Screen**: Buy/sell interface with clear pricing
3. **HELIX Interface**: Central hub for research, inventory, messages, and job board
4. **Bot Workshop**: Bot construction and upgrade interface
5. **Settings/Help**: Tutorial, audio controls, save management

### Visual Feedback Systems

- **Particle Effects**: Circuit sparks when repairing, energy pulses when powering systems
- **Progress Indicators**: Visual timers on growing pods and research projects
- **Lab Assistant Messages**: Inbox system with messages from your lab assistant for achievements, alerts, and guidance
- **Animation States**: Smooth transitions between pod states and bot actions

## 11. Lab Assistant System

### Lab Assistant Character

- **Name**: HELIX (Human-Enhanced Laboratory Intelligence eXecutive)
- **Type**: Administrative Bot (your first bot)
- **Personality**: Helpful, professional, slightly quirky AI assistant
- **Role**: Purely administrative - manages research, inventory, messages, job board (no direct lab work)
- **Voice**: Futurama-inspired humor with scientific professionalism

### HELIX Administrative Interface

- **Research Terminal**: Access to skill tree and technology research
- **Inventory Management**: Organize and track all resources, materials, and goods
- **Message Center**: Read and manage all lab communications and alerts
- **Job Board**: Assign and track bot tasks and automation jobs (future feature)
- **Progress Tracking**: Monitor research progress and lab efficiency
- **Market Analysis**: Reports on market trends and trading opportunities
- **Lab Status**: Overview of all lab systems and maintenance needs
- **Note**: HELIX is purely administrative - she does not perform any direct lab work or farming tasks

### Integration with Gameplay

- **Contextual Messages**: Messages appear based on current lab state
- **Progressive Guidance**: Messages become more advanced as player progresses
- **Family Connection**: Messages occasionally reference Dr. Vex's wisdom
- **Community Updates**: Messages about colony events and market changes
- **Bot Progression**: HELIX's capabilities expand as you research better administrative systems

## 12. Audio Design

### Sound Effects

- **Action Sounds**: Circuit repair (electronic beeps), bot activation (mechanical whir), harvesting (pop)
- **UI Sounds**: Button clicks, menu transitions, notification chimes
- **Environmental**: Subtle lab ambiance, space-themed background hum, bot movement sounds

### Audio Accessibility

- **Volume Controls**: Master, SFX, and music sliders
- **Visual Alternatives**: Subtle screen flashes for audio cues
- **Mute Options**: Complete audio disable for quiet environments

## 13. Game Balance & Progression

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

## 14. Onboarding & Tutorial Design

### Progressive Tutorial System (8 Phases)

1. **Welcome & Setup (0-2 min)**: Game concept, character creation, lab inheritance, HELIX introduction
2. **Basic Lab Navigation (2-5 min)**: Lab overview, UI introduction, inventory system, HELIX interface
3. **First Maintenance Task (5-8 min)**: Maintenance importance, circuit repair, resource gathering, storage
4. **First Crop Planting (8-12 min)**: Crop importance, seed selection, planting process, growth explanation
5. **First Harvest (12-15 min)**: Harvesting process, market introduction, profit calculation, first profit celebration
6. **Basic Crafting (15-20 min)**: Crafting importance, station construction, recipe selection, crafting process
7. **Bot Introduction (20-25 min)**: Bot concept, bot research, bot construction, bot assignment
8. **Advanced Systems (25-30 min)**: Research system, room expansion, environmental control, progression overview

### Safe Learning Environment

- **No Resource Loss**: Tutorial mistakes don't consume resources
- **Instant Completion**: Tutorial tasks complete instantly
- **Unlimited Resources**: Tutorial provides unlimited materials
- **Skip Options**: Players can skip tutorial sections
- **Restart Options**: Players can restart tutorial at any time

### Help Systems

- **Contextual Help**: "?" buttons on complex screens, help appears when needed
- **Recipe Browser**: Visual guide to all crafting possibilities
- **Research Tree**: Clear indicators of what's unlocked next
- **Grandfather's Guidance**: Dr. Zephyr Vex provides tips and mentorship
- **HELIX Assistance**: Administrative AI provides contextual guidance and error diagnosis

## 15. Success Criteria

- MVP is **fun in short sessions (5–10 minutes)**.
- Players always feel progress (crops grown, goods crafted, lab restored).
- Lab maintenance + planting + crafting loop feels satisfying.
- Systems are modular enough to expand without major refactoring.
- New players can complete first harvest within 2 minutes.
- Audio feedback enhances satisfaction without being intrusive.
- Mobile interface is fully functional on devices 320px+ wide.
- Tutorial completion rate exceeds 80%.
- Family story creates emotional investment and motivation.
- Progression from manual to automated feels rewarding and strategic.
