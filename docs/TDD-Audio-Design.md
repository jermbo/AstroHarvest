# Audio Design Document

## Audio Philosophy

**"Cosmic Farm Ambiance"** - Blend the familiar sounds of farming with subtle sci-fi elements. Audio should enhance the cozy, satisfying feeling of progress while maintaining the quirky Futurama-inspired humor.

## Core Audio Principles

### 1. **Satisfaction Over Realism**

- Exaggerated, satisfying sound effects over realistic ones
- Audio feedback that makes every action feel rewarding
- Slightly cartoonish but not childish

### 2. **Layered Complexity**

- Simple base sounds that can be layered for complexity
- Modular audio system for easy expansion
- Consistent audio language across all interactions

### 3. **Accessibility First**

- All audio cues have visual alternatives
- Configurable volume levels for different audio types
- Option to disable audio entirely

## Sound Effect Categories

### Farming Actions

#### Planting Sounds

- **Base**: Soft "thud" of seed hitting soil
- **Enhancement**: Subtle "plop" with small dirt particles
- **Variation**: Slightly different pitch for each crop type
- **Duration**: 0.3-0.5 seconds

#### Watering Sounds

- **Base**: Gentle water splash/glug
- **Enhancement**: Soft "sizzle" for quantum effects
- **Visual**: Water droplet particles
- **Duration**: 0.4-0.6 seconds

#### Harvesting Sounds

- **Base**: Satisfying "pop" or "pluck"
- **Enhancement**: Sparkle/chime for successful harvest
- **Variation**: Different sounds for different crop types
- **Duration**: 0.5-0.8 seconds

#### Tool Usage

- **HoeBot-9000**: Mechanical "whir-click" with small motor sound
- **Watering Can**: Gentle "glug-glug" with liquid movement
- **Axe**: Sharp "chop" with wood crack
- **Pickaxe**: Metallic "clang" with rock chip sounds

### Crafting Sounds

#### Construction Crafting

- **Building Start**: Hammering/construction sounds
- **Progress**: Subtle mechanical whirring
- **Completion**: Satisfying "ding" with completion chime
- **Duration**: 2-4 seconds for build sounds

#### Production Crafting

- **Jam Barrel**: Gentle bubbling/fermenting sounds
- **Wine Barrel**: Deeper, more complex bubbling
- **Oven**: Warm crackling/baking sounds
- **Smelter**: Metallic clanging and hissing
- **Juicer**: Mechanical whirring with liquid sounds

### UI Sounds

#### Button Interactions

- **Primary Buttons**: Soft "click" with subtle reverb
- **Secondary Buttons**: Lighter "tap" sound
- **Navigation**: Gentle "swish" for screen transitions
- **Confirmation**: Positive "chime" for successful actions

#### Menu Sounds

- **Menu Open**: Soft "whoosh" with slight sci-fi filter
- **Menu Close**: Reverse "whoosh" with fade
- **Tab Switch**: Quick "blip" sound
- **Scroll**: Subtle "tick" for each item

#### Notification Sounds

- **Achievement**: Triumphant but short fanfare
- **Error**: Gentle "buzz" (not harsh or alarming)
- **Warning**: Soft "beep" with visual flash
- **Success**: Pleasant "ding" with sparkle

### Environmental Audio

#### Background Ambiance

- **Farm Ambiance**: Subtle wind, distant mechanical hum
- **Space Theme**: Very quiet cosmic "whoosh" or ambient drone
- **Time of Day**: Slightly different ambiance for different sessions
- **Volume**: 20-30% of master volume, barely noticeable

#### Dynamic Audio

- **Plot States**: Subtle audio cues for different plot conditions
- **Weather Effects**: Optional rain sounds or space storms
- **Time Progression**: Audio hints for crop growth stages

## Music System

### Background Music

#### Main Theme

- **Style**: Upbeat, optimistic electronic with organic elements
- **Instruments**: Synthesizers, soft percussion, occasional acoustic elements
- **Mood**: Energetic but not overwhelming, perfect for farming
- **Duration**: 2-3 minute loops with seamless transitions

#### Menu Music

- **Style**: Calmer, more ambient version of main theme
- **Purpose**: Relaxing background for browsing/shopping
- **Volume**: 40-50% of master volume

#### Achievement Music

- **Style**: Triumphant, celebratory fanfare
- **Duration**: 5-10 seconds
- **Trigger**: Major milestones, new unlocks

### Music Implementation

- **Seamless Loops**: No jarring restarts
- **Dynamic Mixing**: Music fades slightly during important actions
- **Volume Control**: Separate slider for music vs SFX
- **Mute Option**: Complete audio disable

## Audio Technical Specifications

### File Formats

- **Primary**: Web Audio API compatible (MP3, OGG)
- **Fallback**: WAV for critical sounds
- **Compression**: Optimized for web delivery
- **Quality**: 44.1kHz, 16-bit for most sounds

### File Organization

```
/audio/
  /sfx/
    /farming/
      - plant_seed.mp3
      - water_crop.mp3
      - harvest_crop.mp3
      - hoe_use.mp3
    /crafting/
      - build_start.mp3
      - build_progress.mp3
      - build_complete.mp3
      - jam_bubbling.mp3
    /ui/
      - button_click.mp3
      - menu_open.mp3
      - notification.mp3
      - error.mp3
  /music/
    - main_theme.mp3
    - menu_ambient.mp3
    - achievement_fanfare.mp3
  /ambiance/
    - farm_background.mp3
    - space_ambient.mp3
```

### Audio Engine Architecture

#### Audio Manager

```typescript
interface AudioManager {
	// Volume controls
	setMasterVolume(volume: number): void;
	setSFXVolume(volume: number): void;
	setMusicVolume(volume: number): void;

	// Sound playback
	playSFX(soundId: string, options?: PlayOptions): void;
	playMusic(trackId: string, loop?: boolean): void;
	stopMusic(): void;

	// Audio state
	isMuted(): boolean;
	toggleMute(): void;

	// Accessibility
	enableVisualFeedback(): void;
	disableVisualFeedback(): void;
}
```

#### Play Options

```typescript
interface PlayOptions {
	volume?: number; // Override default volume
	pitch?: number; // Pitch variation
	delay?: number; // Delay before playing
	loop?: boolean; // Loop the sound
	fadeIn?: number; // Fade in duration
	fadeOut?: number; // Fade out duration
}
```

## Accessibility Features

### Visual Audio Alternatives

- **Screen Flash**: Subtle screen flash for audio cues
- **Particle Effects**: Visual particles for sound events
- **UI Animations**: Button animations for click feedback
- **Progress Indicators**: Visual timers for audio-based actions

### Audio Controls

- **Master Volume**: 0-100% slider
- **SFX Volume**: Separate control for sound effects
- **Music Volume**: Separate control for background music
- **Mute Toggle**: Quick disable all audio
- **Visual Feedback Toggle**: Enable/disable visual alternatives

### Hearing Impaired Support

- **Subtitles**: Text descriptions of important audio events
- **Vibration**: Haptic feedback for mobile devices
- **Color Coding**: Visual indicators for different audio types
- **Size Scaling**: Larger visual feedback for audio cues

## Audio Implementation Guidelines

### Performance Optimization

- **Audio Pooling**: Reuse audio objects to prevent memory leaks
- **Lazy Loading**: Load audio files on demand
- **Compression**: Optimize file sizes for web delivery
- **Caching**: Cache frequently used sounds in memory

### Mobile Considerations

- **Battery Usage**: Minimize background audio processing
- **Data Usage**: Compress audio files for mobile networks
- **Touch Feedback**: Haptic feedback for button presses
- **Background Play**: Pause audio when app is backgrounded

### Browser Compatibility

- **Web Audio API**: Primary audio engine
- **HTML5 Audio**: Fallback for older browsers
- **Autoplay Policies**: Respect browser autoplay restrictions
- **User Interaction**: Require user interaction before playing audio

## Audio Design Patterns

### Feedback Loops

1. **Action → Sound → Visual → Satisfaction**
2. **Consistent Audio Language**: Same sound family for similar actions
3. **Layered Complexity**: Base sound + enhancement + variation
4. **Contextual Adaptation**: Sounds change based on game state

### Audio Cues for Game State

- **Plot Ready**: Subtle "ready" chime
- **Crafting Complete**: Distinctive completion sound
- **Low Resources**: Gentle warning tone
- **Achievement Unlocked**: Triumphant fanfare

### Emotional Design

- **Satisfaction**: Exaggerated, rewarding sounds
- **Progress**: Audio that makes waiting feel productive
- **Discovery**: Special sounds for new unlocks
- **Completion**: Celebratory audio for milestones

## Testing & Quality Assurance

### Audio Testing Checklist

- [ ] All sounds play correctly across different browsers
- [ ] Volume controls work independently
- [ ] Visual alternatives function when audio is disabled
- [ ] Audio doesn't interfere with system sounds
- [ ] Performance is smooth on mobile devices
- [ ] Audio files are properly compressed
- [ ] Accessibility features work as intended

### User Testing

- **Audio Satisfaction**: Test with players to ensure sounds feel rewarding
- **Accessibility**: Test with users who have hearing impairments
- **Mobile Experience**: Test audio on various mobile devices
- **Performance**: Monitor audio impact on game performance

## Future Audio Expansions

### Advanced Features

- **Dynamic Music**: Music that changes based on game progress
- **3D Audio**: Spatial audio for immersive experience
- **Voice Acting**: NPC dialogue and narration
- **Procedural Audio**: Generated sounds based on game state

### Seasonal Audio

- **Holiday Themes**: Special music and sounds for events
- **Weather Audio**: Rain, storms, space phenomena
- **Time-Based**: Different ambiance for different times of day
- **Planetary Audio**: Unique sounds for different planets

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
