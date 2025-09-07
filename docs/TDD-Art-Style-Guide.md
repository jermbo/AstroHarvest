# Art Style Guide & Asset Specifications

## Art Direction Philosophy

**"Cozy Sci-Fi Pixel Art"** - Combining the warmth and charm of traditional farming games with the quirky, slightly absurd aesthetic of Futurama. Every pixel should feel intentional, every color should serve a purpose, and every animation should bring joy.

## Visual Style Principles

### 1. **Pixel Perfect Precision**

- All assets use consistent pixel grid alignment
- No anti-aliasing or smoothing effects
- Clean, crisp edges on all elements
- Consistent pixel density across all assets

### 2. **Cozy Sci-Fi Aesthetic**

- Warm, inviting colors with sci-fi accents
- Organic shapes with technological elements
- Familiar farming concepts with space-age twists
- Humorous details that reward close inspection

### 3. **Functional Beauty**

- Every visual element serves a gameplay purpose
- Clear visual hierarchy for important information
- Consistent visual language across all screens
- Accessibility through high contrast and clear shapes

## Color Palette & Theming

### Primary Color System

#### Space Theme Colors

- **Deep Space**: `#0D1B2A` - Background, dark elements
- **Nebula Blue**: `#2E86AB` - Primary UI, water elements
- **Quantum Purple**: `#A23B72` - Accent colors, special effects
- **Stellar White**: `#E0E1DD` - Text, light backgrounds

#### Farm Theme Colors

- **Rich Soil**: `#8B4513` - Earth, dirt, organic elements
- **Healthy Green**: `#228B22` - Plants, growth, success states
- **Golden Harvest**: `#FFD700` - Ready crops, rewards, achievements
- **Warm Brown**: `#A0522D` - Wood, tools, natural materials

#### Sci-Fi Accent Colors

- **Plasma Orange**: `#FF6B35` - Energy, warnings, important actions
- **Cyber Green**: `#00FF41` - Technology, progress, futuristic elements
- **Neon Pink**: `#FF10F0` - Special effects, rare items, highlights
- **Electric Blue**: `#00BFFF` - Technology, information, cool elements

### Color Usage Guidelines

#### UI Elements

- **Primary Buttons**: Nebula Blue with Stellar White text
- **Secondary Buttons**: Rich Soil with Stellar White text
- **Warning Elements**: Plasma Orange with Deep Space text
- **Success Elements**: Healthy Green with Stellar White text
- **Background**: Deep Space with subtle texture

#### Game Elements

- **Empty Plots**: Rich Soil with subtle dirt texture
- **Growing Crops**: Healthy Green with growth indicators
- **Ready Crops**: Golden Harvest with sparkle effects
- **Watered Crops**: Nebula Blue tint with water droplets
- **Crafting Stations**: Warm Brown with metallic accents

## Typography & Text

### Font Specifications

- **Primary Font**: `'Orbitron'` - Futuristic, clean, readable
- **Secondary Font**: `'Roboto'` - Human-readable, friendly
- **Monospace Font**: `'Orbitron'` - Numbers, stats, technical data

### Text Hierarchy

- **H1 (Page Titles)**: 24px Orbitron, Bold, Stellar White
- **H2 (Section Headers)**: 20px Orbitron, Medium, Nebula Blue
- **H3 (Subsection Headers)**: 18px Orbitron, Regular, Quantum Purple
- **Body Text**: 16px Roboto, Regular, Stellar White
- **Small Text**: 14px Roboto, Regular, Cosmic Silver
- **Numbers/Stats**: 16px Orbitron, Bold, Golden Harvest

### Text Effects

- **Glow Effects**: Subtle outer glow for important text
- **Shadow Effects**: Drop shadows for text on dark backgrounds
- **Color Coding**: Different colors for different information types
- **Animation**: Subtle pulsing for important notifications

## Asset Specifications

### Sprite Sheet Organization

#### Character Sprite Sheet

- **Frame Size**: 32×32 pixels
- **Total Size**: 224×768 pixels (7 frames × 24 rows)
- **Format**: PNG with transparency
- **Color Depth**: 32-bit RGBA
- **Compression**: Lossless

#### Crop Sprite Sheet

- **Frame Size**: 24×24 pixels
- **Total Size**: 120×120 pixels (5 crops × 4 growth stages)
- **Format**: PNG with transparency
- **Color Depth**: 32-bit RGBA
- **Compression**: Lossless

#### UI Element Sprite Sheet

- **Frame Size**: Variable (16×16 to 64×64 pixels)
- **Total Size**: 512×512 pixels
- **Format**: PNG with transparency
- **Color Depth**: 32-bit RGBA
- **Compression**: Lossless

### Asset Creation Guidelines

#### Pixel Art Rules

- **No Anti-aliasing**: All edges must be crisp and pixel-perfect
- **Consistent Pixel Size**: All assets use same pixel density
- **Limited Color Palette**: Use defined color palette only
- **Clear Silhouettes**: All objects must be recognizable at small sizes

#### Animation Principles

- **Smooth Motion**: 7-frame animations for most actions
- **Easing**: Use ease-in-out for natural movement
- **Timing**: 150-200ms for micro-interactions, 2-3s for growth
- **Looping**: Seamless loops for continuous animations

## Character Design

### Main Character (Farmer)

- **Style**: 16-bit pixel art with Futurama-inspired proportions
- **Personality**: Slightly goofy, enthusiastic, space-farmer aesthetic
- **Clothing**: Practical farming clothes with sci-fi elements
- **Accessories**: Futuristic tools, space-themed details

#### Character Proportions

- **Head**: 8×8 pixels (25% of total height)
- **Body**: 16×16 pixels (50% of total height)
- **Legs**: 8×8 pixels (25% of total height)
- **Arms**: 6×12 pixels (extend from body)

#### Character Animations

- **Idle**: Subtle breathing, occasional blinking
- **Walking**: 7-frame cycle with arm swing
- **Planting**: Kneeling motion with seed placement
- **Harvesting**: Bending forward with pulling motion
- **Chopping**: Axe swing with impact frame
- **Mining**: Pickaxe swing with rock debris

### Character Color Scheme

- **Skin**: `#FDBCB4` (warm, healthy tone)
- **Hair**: `#8B4513` (brown, natural)
- **Clothes**: `#2E86AB` (space blue overalls)
- **Accents**: `#FFD700` (golden buttons, buckles)
- **Tools**: `#A0522D` (wooden handles) + `#C0C0C0` (metal parts)

## Environment Design

### Farm Layout

- **Plot Size**: 80×80 pixels (touch-friendly)
- **Plot Spacing**: 8 pixels between plots
- **Background**: Deep Space with subtle starfield
- **Foreground**: Rich Soil with organic texture
- **Borders**: Subtle grid lines in Cosmic Silver

### Plot States

- **Empty**: Rich Soil with subtle dirt texture
- **Planted**: Seed visible with small growth indicator
- **Growing**: Animated crop with progress ring
- **Ready**: Pulsing glow with harvest sparkles
- **Watered**: Nebula Blue tint with water droplets

### Crafting Stations

- **Jam Barrel**: Warm Brown wood with metallic bands
- **Wine Barrel**: Darker brown with brass fittings
- **Oven**: Stone construction with glowing elements
- **Smelter**: Metallic with orange glow effects
- **Juicer**: Modern design with electric blue accents

## UI Design Elements

### Button Styles

- **Primary Button**: Nebula Blue background, Stellar White text, subtle glow
- **Secondary Button**: Rich Soil background, Stellar White text, wood texture
- **Danger Button**: Plasma Orange background, Deep Space text, warning glow
- **Disabled Button**: Cosmic Silver background, muted text, no glow

### Icon Design

- **Style**: 16×16 pixel icons with clear silhouettes
- **Consistency**: All icons use same visual language
- **Recognition**: Icons must be instantly recognizable
- **Scalability**: Icons work at 16px, 24px, and 32px sizes

### Progress Indicators

- **Progress Bars**: Nebula Blue fill, Deep Space background
- **Circular Progress**: Golden Harvest fill, Cosmic Silver background
- **Loading Spinners**: Rotating elements with glow effects
- **Completion Effects**: Sparkle animations and color changes

## Animation Specifications

### Animation Timing

- **Micro-interactions**: 150-200ms (button presses, hovers)
- **Page Transitions**: 300-400ms (screen changes)
- **Crop Growth**: 2-3 seconds (growth animations)
- **Particle Effects**: 1-2 seconds (harvest sparkles, water drops)

### Animation Easing

- **Ease-in-out**: For natural movement (crop growth, character walking)
- **Ease-out**: For UI elements (buttons, menus)
- **Linear**: For continuous animations (progress bars, spinners)
- **Bounce**: For playful elements (achievements, celebrations)

### Particle Effects

- **Harvest Sparkles**: Golden particles with fade-out
- **Water Drops**: Blue particles with splash effect
- **Planting Dirt**: Brown particles with gravity
- **Crafting Smoke**: Gray particles with upward movement

## Asset Pipeline

### Creation Workflow

1. **Concept Art**: Sketch ideas in traditional or digital media
2. **Pixel Art**: Create final assets in pixel art software
3. **Animation**: Animate sprites frame by frame
4. **Optimization**: Compress and optimize for web delivery
5. **Integration**: Import into game engine with proper naming

### File Naming Convention

```
[category]_[name]_[state]_[frame].png
Examples:
- character_farmer_walk_01.png
- crop_blueberry_growing_03.png
- ui_button_primary_normal.png
- effect_sparkle_harvest_05.png
```

### Asset Optimization

- **Compression**: Use PNG compression for pixel art
- **Atlasing**: Combine related sprites into texture atlases
- **LOD**: Create multiple sizes for different screen densities
- **Caching**: Implement proper asset caching for performance

## Quality Assurance

### Visual Consistency Checklist

- [ ] All assets use defined color palette
- [ ] All sprites align to pixel grid
- [ ] All animations have consistent timing
- [ ] All UI elements follow design system
- [ ] All text uses specified fonts and sizes
- [ ] All icons are recognizable at small sizes
- [ ] All effects enhance gameplay without distraction

### Performance Considerations

- [ ] Asset file sizes are optimized for web delivery
- [ ] Sprite sheets are efficiently organized
- [ ] Animations run at 60fps on target devices
- [ ] Memory usage is within acceptable limits
- [ ] Loading times are minimal
- [ ] Assets work across different screen sizes

### Accessibility Compliance

- [ ] Color contrast meets WCAG AA standards
- [ ] Information is not conveyed by color alone
- [ ] Text is readable at all sizes
- [ ] Icons are clear and recognizable
- [ ] Animations can be disabled if needed
- [ ] High contrast mode is supported

## Future Art Expansions

### Seasonal Themes

- **Spring**: Fresh greens, blooming effects
- **Summer**: Bright colors, heat shimmer effects
- **Fall**: Warm oranges, falling leaf particles
- **Winter**: Cool blues, snow effects

### Planetary Variations

- **Desert Planet**: Sandy colors, heat distortion
- **Ice Planet**: Cool blues, frost effects
- **Jungle Planet**: Rich greens, tropical particles
- **Volcanic Planet**: Red/orange colors, lava effects

### Advanced Effects

- **Weather Systems**: Rain, snow, storms
- **Day/Night Cycle**: Lighting changes, star visibility
- **Seasonal Crops**: Special crops for different seasons
- **Holiday Events**: Special decorations and effects

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
