# UI/UX Design Document

## Design Philosophy

**"Cozy Sci-Fi Farming"** - Combining the warmth of traditional farming games with the quirky charm of Futurama's aesthetic. Every interaction should feel satisfying, immediate, and slightly absurd.

## Visual Style Guide

### Color Palette

#### Primary Colors

- **Space Blue**: `#2E86AB` - Primary UI elements, buttons
- **Quantum Purple**: `#A23B72` - Accent colors, highlights
- **Nebula Green**: `#F18F01` - Success states, growth indicators
- **Plasma Orange**: `#C73E1D` - Warnings, important actions

#### Neutral Colors

- **Void Black**: `#0D1B2A` - Background, text
- **Stardust Gray**: `#415A77` - Secondary text, borders
- **Moonlight White**: `#E0E1DD` - Primary text, backgrounds
- **Cosmic Silver**: `#778DA9` - Disabled states, inactive elements

#### Crop-Specific Colors

- **Quantum Blueberry**: `#4A90E2` with subtle glow effect
- **Strawboid**: `#E74C3C` with organic texture
- **Plasmato**: `#9B59B6` with radioactive shimmer
- **AstroGrape**: `#8E44AD` with cosmic sparkles
- **Nebula Wheat**: `#F39C12` with golden aura

### Typography

#### Font Hierarchy

- **Headers**: `'Orbitron', monospace` - Futuristic, bold
- **Body Text**: `'Roboto', sans-serif` - Clean, readable
- **UI Labels**: `'Roboto Condensed', sans-serif` - Compact, clear
- **Numbers/Stats**: `'Orbitron', monospace` - Monospace for alignment

#### Font Sizes (Mobile-First)

- **H1 (Page Titles)**: 24px / 1.5rem
- **H2 (Section Headers)**: 20px / 1.25rem
- **H3 (Subsection Headers)**: 18px / 1.125rem
- **Body Text**: 16px / 1rem
- **Small Text**: 14px / 0.875rem
- **Micro Text**: 12px / 0.75rem

### Spacing System

#### Base Unit: 8px

- **XS**: 4px (0.25rem)
- **SM**: 8px (0.5rem)
- **MD**: 16px (1rem)
- **LG**: 24px (1.5rem)
- **XL**: 32px (2rem)
- **XXL**: 48px (3rem)

## Screen Layouts

### 1. Farm View (Main Screen)

```
┌─────────────────────────────────────┐
│ [≡] AstroHarvest    [💰] 150 [⚙️] │ ← Header Bar
├─────────────────────────────────────┤
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ 🌱  │ │ 🌱  │ │ 🌱  │           │ ← Farm Grid
│  │ 5m  │ │ 7m  │ │ 30m │           │   (3x3 plots)
│  └─────┘ └─────┘ └─────┘           │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ 🌱  │ │ 🌱  │ │ 🌱  │           │
│  │ 45m │ │ 60m │ │ 🌱  │           │
│  └─────┘ └─────┘ └─────┘           │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐           │
│  │ 🌱  │ │ 🌱  │ │ 🌱  │           │
│  │ 5m  │ │ 7m  │ │ 30m │           │
│  └─────┘ └─────┘ └─────┘           │
│                                     │
├─────────────────────────────────────┤
│ [🏪] Market [📦] Inventory [🔨] Craft │ ← Bottom Navigation
└─────────────────────────────────────┘
```

#### Header Bar Components

- **Menu Button**: Hamburger icon (≡) - Settings, help, save
- **Game Title**: "AstroHarvest" with subtle glow effect
- **Credits Display**: Large, prominent number with coin icon
- **Settings Gear**: Quick access to audio, help, save

#### Farm Grid Specifications

- **Plot Size**: 80px × 80px minimum (touch-friendly)
- **Grid Spacing**: 8px between plots
- **Visual States**:
  - Empty: Dark soil with subtle texture
  - Planted: Seed visible with growth progress ring
  - Growing: Animated crop with timer overlay
  - Ready: Pulsing glow effect, harvest sparkles
  - Watered: Subtle blue tint, water droplet icon

#### Bottom Navigation

- **Market**: Shopping cart icon, red dot for new items
- **Inventory**: Backpack icon, item count badge
- **Craft**: Hammer/wrench icon, progress indicators

### 2. Market Screen

```
┌─────────────────────────────────────┐
│ [←] Market        [💰] 150 [⚙️] │ ← Header
├─────────────────────────────────────┤
│ [Buy] [Sell]                        │ ← Tab Navigation
├─────────────────────────────────────┤
│                                     │
│ 🌱 Seeds                            │
│ ┌─────────────────────────────────┐ │
│ │ Quantum Blueberry    [5] [Buy]  │ │ ← Item Rows
│ │ Strawboid           [6] [Buy]  │ │
│ │ Plasmato           [18] [Buy]  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 🔨 Tools                            │
│ ┌─────────────────────────────────┐ │
│ │ HoeBot-9000        [25] [Buy]   │ │
│ │ Watering Can       [15] [Buy]   │ │
│ └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

#### Market Features

- **Tab System**: Buy/Sell with clear visual separation
- **Category Headers**: Icons + text for easy scanning
- **Item Cards**: Consistent layout with price and action button
- **Quantity Selector**: +/- buttons for bulk purchases
- **Search/Filter**: Quick find for large inventories (future)

### 3. Inventory Panel

```
┌─────────────────────────────────────┐
│ [←] Inventory      [💰] 150 [⚙️] │ ← Header
├─────────────────────────────────────┤
│ [All] [🌱] [🔨] [📦] [💎]          │ ← Category Tabs
├─────────────────────────────────────┤
│                                     │
│ 🌱 Seeds (5)                        │
│ ┌─────────────────────────────────┐ │
│ │ Quantum Blueberry    ×12        │ │ ← Item Grid
│ │ Strawboid            ×8         │ │
│ │ Plasmato             ×3         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 🔨 Tools (3)                        │
│ ┌─────────────────────────────────┐ │
│ │ HoeBot-9000         ×1          │ │
│ │ Watering Can        ×1          │ │
│ │ Basic Axe           ×1          │ │
│ └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

#### Inventory Organization

- **Category Tabs**: Visual icons with item counts
- **Grid Layout**: 2-3 items per row on mobile
- **Item Cards**: Icon, name, quantity, and use button
- **Quick Actions**: "Use", "Sell", "Info" buttons per item

### 4. Crafting Station

```
┌─────────────────────────────────────┐
│ [←] Crafting       [💰] 150 [⚙️] │ ← Header
├─────────────────────────────────────┤
│ [Build] [Produce]                   │ ← Tab Navigation
├─────────────────────────────────────┤
│                                     │
│ 🔨 Construction (2/5 built)         │
│ ┌─────────────────────────────────┐ │
│ │ Jam Barrel         [Build]      │ │ ← Recipe Cards
│ │ Wood×8 Stone×4 Minerals×2      │ │
│ │ ⏱️ 2 minutes                    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ 🏭 Production                       │
│ ┌─────────────────────────────────┐ │
│ │ Jam (Ready!)        [Collect]   │ │ ← Active Jobs
│ │ 3 Quantum Blueberries → Jam×1   │ │
│ │ ⏱️ 12:34 remaining              │ │
│ └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

#### Crafting Features

- **Dual Tabs**: Construction vs Production crafting
- **Recipe Cards**: Clear input requirements and timing
- **Progress Indicators**: Visual timers with completion estimates
- **Resource Validation**: Gray out unavailable recipes
- **Queue Management**: Show active jobs with progress

## Interaction Design

### Touch Targets

- **Minimum Size**: 44px × 44px (Apple HIG standard)
- **Comfortable Size**: 48px × 48px for primary actions
- **Spacing**: 8px minimum between interactive elements

### Gesture Support

- **Tap**: Primary interaction for all buttons and plots
- **Long Press**: Context menus, item details
- **Swipe**: Navigate between screens (optional)
- **Pinch/Zoom**: Not applicable (fixed zoom level)

### Feedback Systems

#### Visual Feedback

- **Button Press**: Subtle scale animation (0.95x)
- **Plot Interaction**: Highlight border, particle effects
- **Loading States**: Skeleton screens, progress bars
- **Success Actions**: Green flash, checkmark animation
- **Error States**: Red shake, error message toast

#### Animation Timing

- **Micro-interactions**: 150-200ms (button presses)
- **Page Transitions**: 300-400ms (screen changes)
- **Crop Growth**: 2-3 seconds (growth animations)
- **Particle Effects**: 1-2 seconds (harvest sparkles)

### Error Prevention & Recovery

#### Input Validation

- **Real-time Feedback**: Show requirements as user types
- **Clear Error Messages**: Specific, actionable guidance
- **Undo Actions**: "Undo Plant" for accidental plantings
- **Confirmation Dialogs**: For expensive actions (buying tools)

#### Help Systems

- **Contextual Tooltips**: "?" icons on complex elements
- **Progressive Disclosure**: Show advanced features gradually
- **Tutorial Overlays**: Highlight important elements
- **Help Documentation**: Accessible from settings menu

## Responsive Design

### Breakpoints

- **Mobile**: 320px - 768px (primary target)
- **Tablet**: 768px - 1024px (scaled up)
- **Desktop**: 1024px+ (larger touch targets)

### Mobile Adaptations

- **Single Column Layout**: Stack elements vertically
- **Larger Touch Targets**: 48px minimum for all buttons
- **Simplified Navigation**: Bottom tab bar for primary actions
- **Thumb-Friendly**: Important actions in bottom third of screen

### Tablet Adaptations

- **Two-Column Layout**: Side-by-side panels where appropriate
- **Larger Farm Grid**: 4x4 or 5x5 plot layout
- **Enhanced Crafting**: More recipes visible at once
- **Split-Screen**: Inventory + crafting simultaneously

## Accessibility

### Visual Accessibility

- **Color Contrast**: WCAG AA compliance (4.5:1 ratio)
- **Color Independence**: No information conveyed by color alone
- **Text Scaling**: Support up to 200% zoom
- **High Contrast Mode**: Alternative color scheme option

### Motor Accessibility

- **Large Touch Targets**: 44px minimum for all interactive elements
- **Gesture Alternatives**: Tap alternatives for swipe actions
- **Timing Adjustments**: Configurable animation speeds
- **One-Handed Use**: Important actions reachable with thumb

### Cognitive Accessibility

- **Clear Navigation**: Consistent placement of common actions
- **Simple Language**: Avoid jargon, use clear instructions
- **Progress Indicators**: Show completion status clearly
- **Error Recovery**: Easy ways to fix mistakes

## Performance Considerations

### Loading States

- **Skeleton Screens**: Show structure while content loads
- **Progressive Loading**: Load critical content first
- **Lazy Loading**: Load images and animations on demand
- **Offline Indicators**: Clear messaging when offline

### Animation Performance

- **CSS Transforms**: Use transform/opacity for smooth animations
- **60fps Target**: Optimize for smooth 60fps animations
- **Reduced Motion**: Respect user's motion preferences
- **Battery Optimization**: Reduce animations on low battery

## Implementation Guidelines

### CSS Architecture

- **Mobile-First**: Start with mobile styles, enhance for larger screens
- **Component-Based**: Reusable UI components with consistent styling
- **Design Tokens**: CSS custom properties for colors, spacing, typography
- **Utility Classes**: Tailwind-style utilities for common patterns

### Component Library

- **Button Variants**: Primary, secondary, danger, disabled states
- **Form Elements**: Inputs, selects, checkboxes with consistent styling
- **Cards**: Recipe cards, item cards, plot cards
- **Modals**: Overlays, dialogs, tooltips
- **Navigation**: Tabs, breadcrumbs, pagination

### State Management

- **Loading States**: Skeleton screens, spinners, progress bars
- **Error States**: Error messages, retry buttons, fallback content
- **Empty States**: Helpful messaging when no content available
- **Success States**: Confirmation messages, completion animations

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
