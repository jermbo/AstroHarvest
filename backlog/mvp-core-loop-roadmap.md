# 🎯 MVP Core Loop Roadmap: Manual → Idle → Harvest → Profit

## Overview

This roadmap focuses purely on the **core idle farming loop** that makes the game addictive. Everything else is secondary to getting this loop perfect.

**Goal**: Create a satisfying, engaging idle farming experience with the manual → idle → harvest → profit loop.

**Timeline**: 7-11 weeks total
**Target**: Working, playable idle farming game

---

## 🔄 The Core Loop

### Manual Phase (Player Action)

- **Plant a seed** → Immediate feedback, visual confirmation
- **Water the crop** → Optional, gives growth bonus
- **Check progress** → Satisfying to see growth

### Idle Phase (Time Investment)

- **Real-time growth** → Crops grow while you're away
- **Visual progress** → See the crop getting bigger
- **Anticipation building** → "Just a few more minutes..."

### Harvest Phase (Reward)

- **Satisfying harvest** → Visual/audio feedback
- **Immediate profit** → Credits earned
- **Progress feeling** → "I'm getting somewhere!"

### Profit Phase (Reinvestment)

- **Buy more seeds** → Expand the operation
- **Unlock new crops** → More variety and profit
- **Upgrade systems** → Efficiency improvements

---

## 🚀 Version 0.1.0: Basic Loop + Dev Tools (2-3 weeks)

**Goal**: Get the fundamental loop working with powerful dev tools

### Core Features

- **Single plot** that you can click to plant
- **One crop type** (Quantum Blueberry - 5 minute growth)
- **Basic timer system** with offline progress
- **Simple harvest** → get credits
- **Basic market** → buy seeds with credits
- **Save/load system** → game remembers progress
- **Dev Tools Console** → Game-specific debugging and testing

### Technical Implementation

- Pixi.js setup with TypeScript
- Basic game loop with delta time
- Simple state management
- IndexedDB for persistence
- Basic timer resolution system
- **Dev Tools System** → In-game debugging interface

### Dev Tools Features

- **Seed Management**: Add/remove seeds instantly
- **Time Manipulation**: Speed up/slow down growth timers
- **Resource Control**: Add/remove credits and materials
- **State Inspection**: View and modify game state
- **Save State Management**: Save/load/export game states

### Success Criteria

- [ ] You can plant a seed
- [ ] Crop grows over time (5 minutes)
- [ ] You can harvest when ready
- [ ] You earn credits from harvest
- [ ] You can buy more seeds with credits
- [ ] Game remembers your progress
- [ ] **Dev tools help with testing and development**

**Deliverable**: Working idle farming loop with dev tools

---

## 🚀 Version 0.2.0: Loop Enhancement (2-3 weeks)

**Goal**: Make the loop more engaging and satisfying

### Core Features

- **3x3 plot grid** → expand the operation
- **Visual growth stages** (seed → sprout → growing → ready)
- **Progress indicators** (timers, visual progress bars)
- **Audio/visual feedback** (particle effects, sounds)
- **Simple progression** (unlock 2nd crop type)

### Technical Implementation

- Sprite management system
- Animation system for growth stages
- Audio system for feedback
- Particle effects system
- Basic progression system

### Success Criteria

- [ ] Multiple plots to manage
- [ ] Visual feedback for every action
- [ ] Satisfying harvest experience
- [ ] Clear progress indicators
- [ ] Unlock new content through play

**Deliverable**: Satisfying, engaging loop

---

## 🚀 Version 0.3.0: Content Expansion (2-3 weeks)

**Goal**: Add depth and variety to the farming experience

### Core Features

- **All 5 crop types** with different growth times
- **Basic market** with buy/sell interface
- **Simple progression** (unlock new crops)
- **Basic economy** (pricing, profit margins)
- **Simple statistics** (total harvests, credits earned)

### Technical Implementation

- Data-driven crop system
- Market interface system
- Progression unlock system
- Economy balance system
- Statistics tracking system

### Success Criteria

- [ ] Variety in crop types and growth times
- [ ] Meaningful economic decisions
- [ ] Clear progression path
- [ ] Engaging market interface
- [ ] Sense of advancement

**Deliverable**: Rich, varied farming experience

---

## 🚀 Version 0.4.0: Mobile Polish (1-2 weeks)

**Goal**: Optimize for mobile devices and polish the experience

### Core Features

- **Touch-optimized UI** (44px minimum touch targets)
- **Responsive design** (320px to 768px width)
- **Performance optimization** (60fps target)
- **Battery optimization** (efficient rendering)
- **Offline-first design** (full offline functionality)

### Technical Implementation

- Mobile-optimized input handling
- Responsive UI system
- Performance monitoring
- Battery usage optimization
- Offline progress calculation

### Success Criteria

- [ ] Smooth performance on mobile devices
- [ ] Intuitive touch interface
- [ ] Fast loading and responsive
- [ ] Efficient battery usage
- [ ] Full offline functionality

**Deliverable**: Mobile-ready farming game

---

## 🛠️ Dev Tools System

### Core Dev Tools Features

#### Resource Management

- **Add Credits**: Instantly add any amount of credits
- **Add Seeds**: Add any type and quantity of seeds
- **Add Materials**: Add crafting materials and resources
- **Reset Resources**: Clear all resources to test from scratch

#### Time Manipulation

- **Speed Up Growth**: 2x, 5x, 10x, 100x growth speed multipliers
- **Skip to Harvest**: Instantly complete crop growth
- **Pause Timers**: Freeze all game timers for debugging
- **Time Travel**: Jump forward/backward in game time

#### State Management

- **View Game State**: Inspect all current game data
- **Modify State**: Edit any game state value directly
- **State Validation**: Check for corrupted or invalid states
- **State Comparison**: Compare current state with saved states

#### Performance Monitoring

**Note**: Use existing tools instead of building custom ones:

- **Pixi.js Dev Tools**: Built-in performance stats and render info
- **Chrome Dev Tools**: Memory tab, Performance tab, Network tab
- **Browser APIs**: `performance.now()`, `performance.memory`

#### Save System Tools

- **Export Save**: Download current game state as JSON
- **Import Save**: Load game state from JSON file
- **Save Validation**: Check save file integrity
- **Multiple Save Slots**: Test different game states

#### Testing Tools

- **Scenario Testing**: Pre-defined test scenarios
- **Stress Testing**: Simulate high load conditions
- **Edge Case Testing**: Test boundary conditions
- **Regression Testing**: Compare with previous versions

#### Visual Interface

- **Dev Tools Panel**: Toggle-able overlay with all tools
- **Quick Actions**: One-click buttons for common operations
- **State Inspector**: Tree view of all game state
- **Save Manager**: Visual save file management

### Dev Tools Benefits

#### Development Efficiency

- **Faster Testing**: Skip waiting for timers and growth
- **Easy Debugging**: Inspect and modify game state directly
- **Save Management**: Test different scenarios quickly
- **Time Manipulation**: Speed up testing with timer controls

#### Quality Assurance

- **Edge Case Testing**: Test boundary conditions easily
- **Regression Testing**: Compare with previous versions
- **State Validation**: Ensure save system integrity
- **Save Testing**: Validate save/load functionality

---

## 🎯 Success Metrics

### Technical Goals

- **Performance**: 60fps on mobile devices
- **Loading**: <3 seconds initial load
- **Offline**: Full functionality without internet

### Game Design Goals

- **Engagement**: Players return daily
- **Session Length**: 5-10 minute sessions
- **Retention**: 70%+ return after first day
- **Satisfaction**: Loop feels rewarding and addictive

### User Experience Goals

- **Intuitive**: New players understand immediately
- **Satisfying**: Every action feels rewarding
- **Progressive**: Clear sense of advancement
- **Accessible**: Works for all skill levels

---

## 🔗 Integration Points

### Prerequisites

- **None** - This is the foundation roadmap

### Dependencies for Other Roadmaps

- **Bots & Progression**: Uses crop/plot system
- **Jobs & NPCs**: Uses economy and progression systems
- **Storyline**: Uses progression and unlock systems

### Data Structures

- **Crop System**: Plots, growth timers, harvest states
- **Economy System**: Credits, prices, market interface
- **Progression System**: XP, levels, unlocks
- **Save System**: Game state persistence

---

## 🛠️ Development Tips

### Focus Areas

1. **Make the loop satisfying** - Every action should feel rewarding
2. **Optimize for mobile** - Touch-friendly, battery-efficient
3. **Keep it simple** - Don't add complexity until the loop is perfect
4. **Test constantly** - Play the game yourself to feel the loop

### Common Pitfalls

- **Feature creep** - Stick to the core loop
- **Over-engineering** - Keep systems simple
- **Poor mobile UX** - Test on actual devices
- **Ignoring performance** - Optimize from the start

### AI Acceleration Opportunities

- **Boilerplate generation** - Game loops, state management
- **UI components** - Market interface, progress indicators
- **Data systems** - Crop definitions, economy balance
- **Testing** - Game loop validation, save system testing
- **Dev Tools** - Console commands, state inspection, time manipulation

---

## 📋 Next Steps

1. **Start with v0.1.0** - Get the basic loop working
2. **Test the loop** - Make sure it's fun before adding features
3. **Optimize for mobile** - Don't wait until the end
4. **Plan integration** - Design systems to work with future roadmaps

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
