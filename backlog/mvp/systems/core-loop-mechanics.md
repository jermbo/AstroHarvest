# 🔄 Core Loop Mechanics

## Overview

**Goal**: Define the fundamental gameplay loop that drives engagement
**Timeline**: Foundation for all MVP versions
**Target**: Addictive, satisfying farming experience

## The Core Loop

### 1. Manual Phase (Player Action)

**Duration**: 10-30 seconds per action
**Purpose**: Give players immediate control and feedback

#### Player Actions:

- **Plant Seed**: Click plot → Select seed → Confirm planting
- **Water Crop**: Click plot → Water action → Visual feedback
- **Check Progress**: Hover/click to see growth status

#### Feedback Requirements:

- **Immediate Visual**: Plot changes state instantly
- **Audio Cues**: Satisfying sound effects for each action
- **Progress Indicators**: Clear visual representation of growth stages
- **Resource Confirmation**: Show credits spent, seeds consumed

### 2. Idle Phase (Time Investment)

**Duration**: 5 minutes to 2 hours (depending on crop)
**Purpose**: Create anticipation and return motivation

#### Time Mechanics:

- **Real-time Growth**: Crops grow while player is away
- **Visual Progress**: Sprite changes show growth stages
- **Timer Display**: Clear countdown to harvest time
- **Offline Calculation**: Accurate progress when returning

#### Engagement Hooks:

- **Anticipation Building**: "Just 2 more minutes..."
- **Visual Satisfaction**: Watch crops grow and change
- **Progress Feeling**: Sense of advancement and investment

### 3. Harvest Phase (Reward)

**Duration**: 5-10 seconds per harvest
**Purpose**: Provide satisfying payoff for time investment

#### Harvest Mechanics:

- **Visual Feedback**: Particle effects, screen shake, color changes
- **Audio Rewards**: Satisfying harvest sounds
- **Resource Gain**: Credits earned, items added to inventory
- **Progress Tracking**: XP gained, statistics updated

#### Reward Psychology:

- **Immediate Gratification**: Instant visual/audio feedback
- **Resource Accumulation**: See credits and items grow
- **Achievement Feeling**: "I accomplished something!"

### 4. Profit Phase (Reinvestment)

**Duration**: 30 seconds to 2 minutes
**Purpose**: Enable expansion and progression

#### Investment Options:

- **Buy More Seeds**: Expand current operation
- **Unlock New Crops**: Access higher-value options
- **Upgrade Systems**: Improve efficiency and capacity
- **Research Technology**: Unlock new capabilities

#### Progression Psychology:

- **Expansion Feeling**: "I'm growing my operation!"
- **Strategic Decisions**: Choose what to invest in
- **Future Planning**: Anticipate next unlocks

## Player Experience Flow

### First Session (0-5 minutes)

1. **Tutorial**: Learn to plant first seed
2. **Immediate Feedback**: See seed planted, timer start
3. **First Harvest**: Experience satisfaction of first reward
4. **First Purchase**: Buy more seeds, feel progression

### Early Game (5-30 minutes)

1. **Loop Mastery**: Understand the rhythm
2. **Expansion**: Buy more plots, try different crops
3. **Optimization**: Learn timing and efficiency
4. **Anticipation**: Look forward to longer crops

### Mid Game (30 minutes - 2 hours)

1. **Strategic Planning**: Plan crop rotations
2. **Resource Management**: Balance credits and seeds
3. **Progression Unlocks**: Access new content
4. **Idle Optimization**: Maximize offline progress

## Core Loop Success Criteria

### Engagement Metrics

- **Session Length**: 5-10 minutes average
- **Return Rate**: 70%+ return after first day
- **Loop Completion**: 80%+ complete full cycle
- **Satisfaction**: Positive feedback on harvest experience

### Technical Requirements

- **Responsiveness**: <100ms action response time
- **Visual Quality**: Smooth animations and transitions
- **Audio Quality**: Clear, satisfying sound effects
- **Performance**: 60fps during all interactions

### Balance Requirements

- **Time Investment**: 5 minutes minimum for meaningful progress
- **Reward Ratio**: 1.5-2x profit margin on crops
- **Progression Pace**: New unlocks every 10-15 minutes
- **Idle Rewards**: 2+ hours offline provides substantial returns

## Implementation Requirements

### Visual Design

- **Growth Stages**: 4-5 distinct visual states per crop
- **Progress Indicators**: Clear timers and progress bars
- **Feedback Effects**: Particle systems for actions
- **UI Clarity**: Intuitive interface for all actions

### Audio Design

- **Action Sounds**: Distinct audio for plant, water, harvest
- **Ambient Audio**: Subtle background atmosphere
- **Reward Sounds**: Satisfying harvest and purchase sounds
- **Audio Accessibility**: Visual alternatives for all audio cues

### Technical Systems

- **Timer Resolution**: Accurate offline progress calculation
- **State Management**: Reliable game state persistence
- **Performance**: Smooth rendering on mobile devices
- **Error Handling**: Graceful recovery from failures

## Player Psychology Integration

### Dopamine Triggers

- **Variable Rewards**: Random yield bonuses
- **Progress Bars**: Visual advancement indicators
- **Achievement Unlocks**: New content and capabilities
- **Social Elements**: Future sharing and comparison features

### Retention Hooks

- **Daily Rewards**: Bonus credits for returning players
- **Collection Goals**: "Harvest 100 Quantum Blueberries"
- **Efficiency Challenges**: "Complete harvest in under 30 seconds"
- **Progression Gates**: "Unlock Plasmatoes at level 5"

### Addiction Prevention

- **Healthy Limits**: Reasonable time investments
- **Clear Progression**: Transparent advancement paths
- **Meaningful Choices**: Strategic decision-making
- **Satisfaction Focus**: Quality over quantity

## Success Metrics

### Technical Metrics

- 60fps on mobile devices
- <3 seconds initial load
- Full offline functionality
- <5% crash rate

### Player Experience Metrics

- 70%+ return after first day
- 5-10 minute average session length
- 80%+ tutorial completion rate
- Positive player feedback on core loop

### Game Balance Metrics

- 1.5-2x profit margins on crops
- 2+ hour offline rewards
- Clear progression path
- Satisfying unlock progression

## Deliverable

Addictive, satisfying core gameplay loop

## Next Steps

1. Define visual growth stages for all crops
2. Implement timer system with offline progress
3. Create harvest feedback system
4. Build progression unlock system
5. Implement audio feedback system
6. Add particle effects for actions
7. Test and validate core loop satisfaction
8. Balance and tune all mechanics

## Dependencies

- **Basic game systems** must be working
- **Save/load system** must be implemented
- **Game state management** must be in place

## Integration Points

- **All MVP versions**: Core loop drives all development
- **Future roadmaps**: Core loop supports all future features
- **Player retention**: Core loop is the primary retention mechanism
