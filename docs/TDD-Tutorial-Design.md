# Tutorial & Onboarding Design

## Onboarding Philosophy

**"Learn by Doing, Not by Reading"** - Players should discover the game through guided interaction rather than text walls. Every tutorial step should be hands-on, immediately rewarding, and build naturally on previous knowledge.

## Core Onboarding Principles

### 1. **Immediate Engagement**

- First interaction within 10 seconds of app launch
- No lengthy introductions or backstory
- Start with the core gameplay loop immediately

### 2. **Progressive Complexity**

- Introduce one concept at a time
- Build on previous knowledge
- Never overwhelm with multiple new systems

### 3. **Safe Learning Environment**

- No penalties for tutorial mistakes
- Clear feedback for every action
- Easy recovery from errors

### 4. **Contextual Help**

- Help appears when needed, not before
- Tooltips and hints for complex features
- Optional deeper explanations available

## Tutorial Flow Design

### Phase 1: Welcome & First Plant (0-2 minutes)

#### Welcome Screen

```
┌─────────────────────────────────────┐
│                                     │
│    🌌 Welcome to AstroHarvest!     │
│                                     │
│  Farm alien crops, craft goods,    │
│  and sell at the Intergalactic     │
│  Market in this cozy space farm!   │
│                                     │
│  [Start Farming] →                  │
│                                     │
└─────────────────────────────────────┘
```

**Design Notes**:

- Single screen, no scrolling
- Clear value proposition
- Single call-to-action button
- No overwhelming information

#### First Plot Interaction

**Tutorial Step 1**: "Tap an empty plot to plant your first crop"

- **Visual**: Empty plot highlighted with pulsing border
- **Audio**: Gentle chime to draw attention
- **Feedback**: Plot glows when tapped
- **Result**: Seed selection appears

**Tutorial Step 2**: "Choose Quantum Blueberries - they grow fast!"

- **Visual**: Only Quantum Blueberries available, others grayed out
- **Audio**: Satisfying selection sound
- **Feedback**: Seed icon appears on plot
- **Result**: Planting animation plays

**Tutorial Step 3**: "Great! Your crop is growing. Come back in 5 minutes!"

- **Visual**: Growth progress ring appears
- **Audio**: Gentle growth sound
- **Feedback**: Timer shows 5:00 countdown
- **Result**: Tutorial pauses, player can explore

### Phase 2: First Harvest & Market (2-5 minutes)

#### Harvest Tutorial

**Tutorial Step 4**: "Your crop is ready! Tap to harvest"

- **Visual**: Plot pulses with golden glow
- **Audio**: Harvest-ready chime
- **Feedback**: Harvest animation with sparkles
- **Result**: Crop appears in inventory

**Tutorial Step 5**: "Now let's sell your crop at the Market"

- **Visual**: Market button highlighted
- **Audio**: Navigation sound
- **Feedback**: Market screen opens
- **Result**: Sell interface appears

**Tutorial Step 6**: "Tap to sell your Quantum Blueberries"

- **Visual**: Only harvested crop available for sale
- **Audio**: Sale confirmation sound
- **Feedback**: Credits increase, item disappears
- **Result**: First profit achieved

### Phase 3: Expansion & Tools (5-15 minutes)

#### Tool Introduction

**Tutorial Step 7**: "Buy a HoeBot-9000 to till soil faster"

- **Visual**: HoeBot highlighted in market
- **Audio**: Purchase sound
- **Feedback**: Tool appears in inventory
- **Result**: Tool becomes available for use

**Tutorial Step 8**: "Use your HoeBot on an empty plot"

- **Visual**: Empty plot highlighted
- **Audio**: Tool activation sound
- **Feedback**: Soil tilling animation
- **Result**: Plot becomes ready for planting

#### Second Crop Cycle

**Tutorial Step 9**: "Plant another crop - try Strawboids this time"

- **Visual**: Strawboids now available
- **Audio**: Selection sound
- **Feedback**: Different growth timer (7 minutes)
- **Result**: Player experiences variety

### Phase 4: Crafting Introduction (15-30 minutes)

#### First Station

**Tutorial Step 10**: "Build a Jam Barrel to make jam from berries"

- **Visual**: Construction recipe highlighted
- **Audio**: Building sound
- **Feedback**: Station appears on farm
- **Result**: New crafting option available

**Tutorial Step 11**: "Make jam from your berries"

- **Visual**: Production recipe highlighted
- **Audio**: Crafting sound
- **Feedback**: Progress bar shows 15-minute timer
- **Result**: First crafted item

**Tutorial Step 12**: "Sell your jam for more profit!"

- **Visual**: Jam highlighted in inventory
- **Audio**: Sale sound
- **Feedback**: Higher credit gain
- **Result**: Player understands crafting value

## Tutorial Implementation

### Tutorial State Management

```typescript
interface TutorialState {
	currentStep: number;
	completedSteps: number[];
	isActive: boolean;
	canSkip: boolean;
	lastInteraction: Date;
}

interface TutorialStep {
	id: string;
	title: string;
	description: string;
	targetElement: string;
	highlightType: "pulse" | "glow" | "border";
	audioCue?: string;
	visualEffect?: string;
	requiredAction: string;
	nextStepTrigger: string;
}
```

### Tutorial UI Components

#### Tutorial Overlay

```
┌─────────────────────────────────────┐
│ [Skip Tutorial]                     │
├─────────────────────────────────────┤
│                                     │
│  🌱 Plant your first crop!          │
│                                     │
│  Tap the highlighted plot to        │
│  choose a seed and start growing.   │
│                                     │
│  [Next] [Previous]                  │
│                                     │
└─────────────────────────────────────┘
```

#### Highlighting System

- **Pulse**: Gentle pulsing border for attention
- **Glow**: Soft glow effect for important elements
- **Border**: Animated border for interactive elements
- **Arrow**: Pointing arrow for directional guidance

### Tutorial Progression Logic

#### Step Completion Detection

```typescript
class TutorialManager {
	checkStepCompletion(step: TutorialStep): boolean {
		switch (step.requiredAction) {
			case "plant_crop":
				return this.hasPlantedCrop();
			case "harvest_crop":
				return this.hasHarvestedCrop();
			case "sell_item":
				return this.hasSoldItem();
			case "buy_tool":
				return this.hasBoughtTool();
			case "build_station":
				return this.hasBuiltStation();
			default:
				return false;
		}
	}
}
```

#### Tutorial Flow Control

- **Automatic Progression**: Steps advance when conditions are met
- **Manual Progression**: Player can click "Next" to advance
- **Skip Option**: Available after first 3 steps
- **Pause/Resume**: Tutorial pauses during long waits (crop growth)

## Contextual Help System

### Tooltip System

```typescript
interface Tooltip {
	id: string;
	title: string;
	content: string;
	position: "top" | "bottom" | "left" | "right";
	trigger: "hover" | "click" | "focus";
	showOnce: boolean;
}
```

#### Tooltip Examples

- **Plot States**: "Empty plots can be planted. Growing plots show progress. Ready plots can be harvested."
- **Crafting Stations**: "Stations process crops into valuable goods. Higher tier stations unlock better recipes."
- **Market Prices**: "Prices are fixed but crafted goods sell for more than raw crops."
- **Inventory Management**: "Items are organized by type. Seeds, crops, materials, and goods are separate."

### Help Documentation

#### In-Game Help Menu

```
┌─────────────────────────────────────┐
│ [←] Help & Tutorial                 │
├─────────────────────────────────────┤
│ [Tutorial] [Controls] [Tips]        │
├─────────────────────────────────────┤
│                                     │
│ 🌱 Farming Basics                   │
│ • Plant seeds in empty plots        │
│ • Water crops for faster growth     │
│ • Harvest when crops are ready      │
│ • Sell crops at the Market          │
│                                     │
│ 🔨 Crafting Guide                   │
│ • Build stations with materials     │
│ • Use stations to process crops     │
│ • Crafted goods sell for more       │
│ • Higher tier stations = better     │
│   recipes                           │
│                                     │
└─────────────────────────────────────┘
```

### Progressive Disclosure

#### Beginner Mode (First 30 minutes)

- **Simplified UI**: Only essential elements visible
- **Guided Actions**: Clear next steps highlighted
- **Limited Options**: Only basic crops and tools available
- **Extra Help**: Tooltips and hints for every action

#### Intermediate Mode (30 minutes - 2 hours)

- **Full UI**: All elements visible but not overwhelming
- **Contextual Help**: Help appears when needed
- **More Options**: Advanced crops and stations available
- **Strategic Hints**: Tips for optimization and efficiency

#### Expert Mode (2+ hours)

- **Minimal UI**: Clean interface with advanced features
- **On-Demand Help**: Help only when requested
- **All Options**: Complete game content available
- **Advanced Tips**: Optimization and min-maxing guidance

## Tutorial Accessibility

### Visual Accessibility

- **High Contrast**: Tutorial overlays use high contrast colors
- **Large Text**: Tutorial text is larger than normal UI text
- **Clear Icons**: Simple, recognizable icons for all actions
- **Color Independence**: Information not conveyed by color alone

### Motor Accessibility

- **Large Touch Targets**: Tutorial buttons are 48px minimum
- **Simple Gestures**: Only tap interactions required
- **No Time Pressure**: No timed tutorial elements
- **Easy Recovery**: Clear undo options for mistakes

### Cognitive Accessibility

- **Simple Language**: Clear, jargon-free instructions
- **One Concept at a Time**: Never introduce multiple new concepts
- **Visual Examples**: Show don't just tell
- **Repetition**: Reinforce key concepts multiple times

## Tutorial Testing & Iteration

### Key Metrics to Track

1. **Completion Rate**: Percentage of players who finish tutorial
2. **Drop-off Points**: Where players abandon the tutorial
3. **Time to First Harvest**: How long until first success
4. **Help Usage**: How often players access help systems
5. **Retention**: Do tutorial completers return to play?

### A/B Testing Opportunities

- **Tutorial Length**: Test 5-step vs 10-step vs 15-step tutorials
- **Visual Style**: Test different highlighting and overlay styles
- **Audio Cues**: Test with and without audio guidance
- **Skip Options**: Test different skip availability timing

### Iteration Process

1. **Data Collection**: Monitor tutorial completion and drop-off
2. **User Testing**: Observe players going through tutorial
3. **Pain Point Identification**: Find confusing or frustrating steps
4. **Solution Design**: Create alternatives for problematic steps
5. **Implementation**: Deploy changes and measure impact
6. **Validation**: Confirm improvements in key metrics

## Advanced Tutorial Features

### Adaptive Tutorials

- **Skill Assessment**: Adjust tutorial based on player experience
- **Pace Adaptation**: Speed up for quick learners, slow down for others
- **Interest-Based**: Focus on aspects player seems most interested in
- **Mistake Recovery**: Extra help for players who struggle

### Interactive Tutorials

- **Simulated Scenarios**: Practice mode with fake resources
- **Guided Challenges**: Specific goals with step-by-step guidance
- **Sandbox Mode**: Free play with unlimited resources
- **Achievement Integration**: Tutorial steps unlock achievements

### Community Features

- **Tutorial Sharing**: Players can share tutorial tips
- **Mentor System**: Experienced players help newcomers
- **Video Guides**: Optional video explanations for complex concepts
- **FAQ Integration**: Common questions answered in context

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
