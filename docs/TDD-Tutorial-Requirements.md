# Tutorial & Onboarding Requirements

## Onboarding Philosophy

**"Learn by Doing, Not by Reading"** - Players must discover the game through guided interaction rather than text walls. Every tutorial step must be hands-on, immediately rewarding, and build naturally on previous knowledge.

## Core Onboarding Requirements

### Immediate Engagement Requirements

- **First Interaction**: Must occur within 10 seconds of app launch
- **No Lengthy Introductions**: Must not have lengthy backstory or explanations
- **Core Gameplay Start**: Must start with the core gameplay loop immediately
- **Clear Value Proposition**: Must quickly show what makes the game fun

### Progressive Complexity Requirements

- **One Concept at a Time**: Must introduce only one new concept per step
- **Build on Previous Knowledge**: Each step must build on what player already learned
- **Never Overwhelm**: Must never introduce multiple new systems simultaneously
- **Natural Progression**: Must feel like natural discovery, not forced learning

### Safe Learning Environment Requirements

- **No Penalties**: Must not penalize players for tutorial mistakes
- **Clear Feedback**: Must provide clear feedback for every action
- **Easy Recovery**: Must provide easy ways to recover from errors
- **Encouraging Tone**: Must maintain positive, encouraging tone throughout

### Contextual Help Requirements

- **Help When Needed**: Help must appear when needed, not before
- **Tooltips and Hints**: Must provide tooltips for complex features
- **Optional Deep Explanations**: Must provide deeper explanations for those who want them
- **Progressive Disclosure**: Must reveal complexity gradually

## Tutorial Flow Requirements

### Phase 1: Welcome & First Plant (0-2 minutes)

**Goal**: Get player to first successful action quickly

#### Welcome Screen Requirements

- **Single Screen**: Must be single screen with no scrolling required
- **Clear Value Proposition**: Must explain what the game is about briefly
- **Single Call-to-Action**: Must have one clear button to start
- **No Overwhelming Information**: Must not provide too much information upfront

#### First Plot Interaction Requirements

- **Clear Instructions**: Must provide clear, simple instructions
- **Visual Highlighting**: Must highlight the plot to interact with
- **Audio Cues**: Must provide gentle audio cues to draw attention
- **Immediate Feedback**: Must provide immediate visual feedback when plot is tapped

#### Seed Selection Requirements

- **Limited Options**: Must show only available options (Quantum Blueberries)
- **Clear Choice**: Must make it obvious which seed to choose
- **Satisfying Selection**: Must provide satisfying feedback when seed is selected
- **Growth Explanation**: Must explain what will happen next

#### Growth Introduction Requirements

- **Progress Visualization**: Must show growth progress clearly
- **Time Expectation**: Must set clear expectation about when to return
- **Tutorial Pause**: Must pause tutorial during growth time
- **Exploration Encouragement**: Must encourage player to explore while waiting

### Phase 2: First Harvest & Market (2-5 minutes)

**Goal**: Complete first profit cycle and introduce market

#### Harvest Tutorial Requirements

- **Clear Readiness**: Must clearly indicate when crop is ready
- **Harvest Instructions**: Must provide clear instructions for harvesting
- **Satisfying Animation**: Must provide satisfying harvest animation
- **Immediate Reward**: Must show immediate reward from harvest

#### Market Introduction Requirements

- **Market Access**: Must clearly show how to access market
- **Sell Instructions**: Must provide clear instructions for selling
- **Price Display**: Must clearly show what player will earn
- **First Profit**: Must provide satisfying first profit experience

### Phase 3: Expansion & Tools (5-15 minutes)

**Goal**: Introduce tools and second crop cycle

#### Tool Introduction Requirements

- **Tool Benefits**: Must clearly explain why tools are useful
- **Purchase Process**: Must guide through first tool purchase
- **Tool Usage**: Must show how to use the tool
- **Immediate Benefit**: Must show immediate benefit from tool use

#### Second Crop Cycle Requirements

- **Variety Introduction**: Must introduce second crop type
- **Different Timing**: Must show different growth times
- **Strategic Choice**: Must introduce concept of choosing different crops
- **Expanded Options**: Must show that more options are available

### Phase 4: Crafting Introduction (15-30 minutes)

**Goal**: Introduce crafting system and show its value

#### First Station Requirements

- **Construction Introduction**: Must explain how to build stations
- **Resource Requirements**: Must clearly show what resources are needed
- **Building Process**: Must guide through first station construction
- **Station Placement**: Must show where and how to place stations

#### First Crafting Requirements

- **Recipe Introduction**: Must explain how crafting works
- **Input Requirements**: Must clearly show what inputs are needed
- **Crafting Process**: Must guide through first crafting job
- **Output Explanation**: Must explain what the crafted item does

#### Value Demonstration Requirements

- **Profit Comparison**: Must show that crafting is more profitable
- **Time Investment**: Must explain the time vs profit trade-off
- **Strategic Choice**: Must introduce concept of choosing what to craft
- **Future Possibilities**: Must hint at more advanced crafting options

## Tutorial Implementation Requirements

### Tutorial State Management Requirements

- **Step Tracking**: Must track current tutorial step and completed steps
- **Progress Persistence**: Must remember tutorial progress across sessions
- **Skip Option**: Must allow skipping tutorial after first few steps
- **Resume Capability**: Must allow resuming tutorial if interrupted

### Tutorial UI Requirements

- **Overlay Design**: Must use overlay that doesn't interfere with game
- **Clear Instructions**: Must provide clear, concise instructions
- **Visual Highlighting**: Must highlight relevant game elements
- **Progress Indication**: Must show tutorial progress to player

### Tutorial Flow Control Requirements

- **Automatic Progression**: Must advance steps when conditions are met
- **Manual Progression**: Must allow player to advance manually
- **Skip Option**: Must be available after first 3 steps
- **Pause/Resume**: Must pause during long waits and allow resuming

## Contextual Help System Requirements

### Tooltip System Requirements

- **Contextual Appearance**: Must appear when player needs help
- **Clear Information**: Must provide clear, helpful information
- **Non-Intrusive**: Must not interfere with gameplay
- **Dismissible**: Must be easy to dismiss when no longer needed

### Help Documentation Requirements

- **In-Game Access**: Must be accessible from within the game
- **Organized Content**: Must be organized by topic and difficulty
- **Search Functionality**: Must allow finding specific information
- **Visual Examples**: Must include visual examples where helpful

### Progressive Disclosure Requirements

- **Beginner Mode**: Must show only essential elements for first 30 minutes
- **Intermediate Mode**: Must show all elements but with extra help
- **Expert Mode**: Must show clean interface with help on demand
- **Smooth Transition**: Must transition smoothly between modes

## Accessibility Requirements

### Visual Accessibility Requirements

- **High Contrast**: Must use high contrast colors for tutorial overlays
- **Large Text**: Must use larger text for tutorial instructions
- **Clear Icons**: Must use simple, recognizable icons
- **Color Independence**: Must not rely solely on color for information

### Motor Accessibility Requirements

- **Large Touch Targets**: Must use large touch targets for tutorial buttons
- **Simple Gestures**: Must only require tap interactions
- **No Time Pressure**: Must not have timed tutorial elements
- **Easy Recovery**: Must provide clear undo options for mistakes

### Cognitive Accessibility Requirements

- **Simple Language**: Must use clear, jargon-free instructions
- **One Concept at a Time**: Must never introduce multiple new concepts
- **Visual Examples**: Must show rather than just tell
- **Repetition**: Must reinforce key concepts multiple times

## Tutorial Testing Requirements

### Key Metrics to Track

- **Completion Rate**: Percentage of players who finish tutorial
- **Drop-off Points**: Where players abandon the tutorial
- **Time to First Harvest**: How long until first success
- **Help Usage**: How often players access help systems
- **Retention**: Do tutorial completers return to play?

### A/B Testing Requirements

- **Tutorial Length**: Test different tutorial lengths
- **Visual Style**: Test different highlighting and overlay styles
- **Audio Cues**: Test with and without audio guidance
- **Skip Options**: Test different skip availability timing

### Iteration Requirements

- **Data Collection**: Must monitor tutorial completion and drop-off
- **User Testing**: Must observe players going through tutorial
- **Pain Point Identification**: Must find confusing or frustrating steps
- **Solution Design**: Must create alternatives for problematic steps
- **Implementation**: Must deploy changes and measure impact
- **Validation**: Must confirm improvements in key metrics

## Advanced Tutorial Features Requirements

### Adaptive Tutorials Requirements

- **Skill Assessment**: Must adjust tutorial based on player experience
- **Pace Adaptation**: Must speed up for quick learners, slow down for others
- **Interest-Based**: Must focus on aspects player seems most interested in
- **Mistake Recovery**: Must provide extra help for players who struggle

### Interactive Tutorials Requirements

- **Simulated Scenarios**: Must provide practice mode with fake resources
- **Guided Challenges**: Must provide specific goals with step-by-step guidance
- **Sandbox Mode**: Must allow free play with unlimited resources
- **Achievement Integration**: Must integrate tutorial steps with achievements

### Community Features Requirements

- **Tutorial Sharing**: Must allow players to share tutorial tips
- **Mentor System**: Must allow experienced players to help newcomers
- **Video Guides**: Must provide optional video explanations
- **FAQ Integration**: Must answer common questions in context

## Success Criteria

### Tutorial Experience Goals

- **High Completion Rate**: At least 80% of players must complete tutorial
- **Quick Success**: Players must achieve first harvest within 2 minutes
- **Clear Understanding**: Players must understand core mechanics after tutorial
- **Positive Experience**: Players must feel confident and excited to continue

### Learning Goals

- **Core Mechanics**: Players must understand farming, harvesting, and selling
- **Market System**: Players must understand how to buy and sell items
- **Tool Usage**: Players must understand how to use basic tools
- **Crafting Introduction**: Players must understand basic crafting concepts

### Retention Goals

- **Immediate Return**: Players must want to return after first session
- **Long-term Engagement**: Tutorial completers must have higher retention
- **Reduced Support**: Must reduce need for customer support
- **Positive Reviews**: Must contribute to positive player reviews

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
