# Enhanced Logger System

The enhanced Logger system provides rich contextual information and multiple display modes to make console output readable and organized for effective debugging.

## 🎨 Display Modes

### 1. **Grouped Mode (Default)**

Perfect for development - uses console.group for organized, collapsible logs:

```typescript
Logger.getInstance().enableGroupedMode();
```

**Output Example:**

```
ℹ️ [GameService] Successfully planted quantum_blueberry on plot_001
  📋 Method: plantCrop
  ⚡ Action: plant
  🏡 Plot: plot_001
  🌱 Crop: quantum_blueberry
  📊 Data: { plotState: "empty", seedsAvailable: 5 }
```

### 2. **Compact Mode**

Clean single-line logs for production or when you need less detail:

```typescript
Logger.getInstance().enableCompactMode();
```

**Output Example:**

```
ℹ️ [GameService] → plant Successfully planted quantum_blueberry on plot_001
⚠️ [StorageManager] → save_error Storage save failed, retrying
```

### 3. **Standard Mode**

Traditional logging format (fallback):

```typescript
Logger.getInstance().configure({
	enableGrouping: false,
	compactMode: false,
});
```

## 🚀 Quick Configuration

### Development Mode

```typescript
Logger.getInstance().enableDevelopmentMode();
// Enables: DEBUG level, grouped mode, stack traces
```

### Production Mode

```typescript
Logger.getInstance().enableProductionMode();
// Enables: WARN+ level, compact mode, no stack traces
```

## 🎯 Visual Improvements

### Icons for Log Levels

- 🔍 **DEBUG** - Detailed debugging information
- ℹ️ **INFO** - General information
- ⚠️ **WARN** - Warning messages
- ❌ **ERROR** - Error messages

### Context Icons

- 📋 **Method** - Function/method name
- ⚡ **Action** - What action is being performed
- 🧩 **Component** - UI component name
- 🏡 **Plot** - Farm plot identifier
- 🌱 **Crop** - Crop type
- 👤 **User** - User identifier
- 🔗 **Session** - Session identifier
- 📊 **Data** - Additional metadata

## 🔍 Core Features

### 1. **Method Name Extraction**

Automatically extracts the calling method name from the stack trace:

```typescript
// Output varies by mode - see display modes above
logger.info("Successfully planted crop");
```

### 2. **Rich Context Information**

Add structured context data to help trace issues:

```typescript
const context: LogContext = {
	method: "plantCrop",
	action: "plant",
	plotId: "plot_001",
	cropId: "quantum_blueberry",
	metadata: {
		plotState: "empty",
		seedsAvailable: 5,
		playerCredits: 150,
	},
};

logger.info("Attempting to plant crop", context);
```

**Grouped Mode Output:**

```
ℹ️ [GameService] Attempting to plant crop
  📋 Method: plantCrop
  ⚡ Action: plant
  🏡 Plot: plot_001
  🌱 Crop: quantum_blueberry
  📊 Data: { plotState: "empty", seedsAvailable: 5, playerCredits: 150 }
```

**Compact Mode Output:**

```
ℹ️ [GameService] → plant Attempting to plant crop
```

### 3. **Stack Traces for Errors**

Enable detailed stack traces for error debugging:

```typescript
// Configure logger to show stack traces
logger.configure({ enableStackTrace: true });

logger.error("Critical game error", error, context);
// Output includes full stack trace for debugging
```

## 📋 LogContext Properties

| Property    | Type   | Description                | Example                              |
| ----------- | ------ | -------------------------- | ------------------------------------ |
| `method`    | string | The method being executed  | "plantCrop", "harvestCrop"           |
| `action`    | string | The action being performed | "plant", "harvest", "save"           |
| `plotId`    | string | Farm plot identifier       | "plot_001", "plot_A3"                |
| `cropId`    | string | Crop type identifier       | "quantum_blueberry", "cosmic_carrot" |
| `userId`    | string | User/player identifier     | "player_12345"                       |
| `sessionId` | string | Session identifier         | "sess_abc123..."                     |
| `component` | string | UI component name          | "SpeedControls", "FarmGrid"          |
| `metadata`  | object | Additional key-value data  | `{ credits: 100, level: 5 }`         |

## 🚀 Usage Examples

### Basic Logging with Context

```typescript
import { createLogger, type LogContext } from "../engine/utils/Logger";

const logger = createLogger("PlantingService");

public async plantCrop(plotId: string, cropId: string): Promise<boolean> {
  const context: LogContext = {
    method: "plantCrop",
    action: "plant",
    plotId,
    cropId
  };

  logger.info("Starting crop planting process", context);

  try {
    // ... planting logic
    logger.info("Crop planted successfully", context);
    return true;
  } catch (error) {
    logger.error("Failed to plant crop", error, context);
    return false;
  }
}
```

### Game State Operations

```typescript
public saveGameState(): void {
  const context: LogContext = {
    method: "saveGameState",
    action: "save",
    metadata: {
      plotCount: this.plots.length,
      playerCredits: this.credits,
      lastSaveTime: this.lastSaveTime
    }
  };

  logger.debug("Preparing to save game state", context);

  try {
    // ... save logic
    logger.info("Game state saved successfully", {
      ...context,
      metadata: {
        ...context.metadata,
        saveSize: this.calculateSaveSize(),
        saveDuration: Date.now() - startTime
      }
    });
  } catch (error) {
    logger.error("Failed to save game state", error, context);
  }
}
```

### UI Interaction Tracking

```typescript
public handlePlotClick(plotId: string): void {
  const plot = this.getPlot(plotId);
  const context: LogContext = {
    method: "handlePlotClick",
    action: "click",
    plotId,
    component: "FarmGrid",
    metadata: {
      plotState: plot?.state,
      clickCount: this.clickCount++
    }
  };

  logger.debug("Plot clicked", context);

  if (plot?.state === "ready") {
    logger.info("Initiating harvest", { ...context, action: "harvest" });
    this.harvestPlot(plotId);
  } else if (plot?.state === "empty") {
    logger.info("Opening seed selection", { ...context, action: "select_seed" });
    this.showSeedSelection(plotId);
  }
}
```

### Error Handling with Rich Context

```typescript
public async loadGameData(): Promise<void> {
  const context: LogContext = {
    method: "loadGameData",
    action: "load",
    metadata: {
      storageType: this.storageManager.getType(),
      gameVersion: this.gameVersion
    }
  };

  try {
    logger.info("Loading game data", context);

    const data = await this.storageManager.load();
    if (!data) {
      logger.warn("No saved data found, using defaults", context);
      this.useDefaultData();
      return;
    }

    logger.info("Game data loaded successfully", {
      ...context,
      metadata: {
        ...context.metadata,
        dataSize: JSON.stringify(data).length,
        plotCount: data.plots?.length || 0
      }
    });
  } catch (error) {
    logger.error("Failed to load game data", error, {
      ...context,
      metadata: {
        ...context.metadata,
        errorType: error.constructor.name,
        errorMessage: error.message
      }
    });
    throw error;
  }
}
```

### Performance Monitoring

```typescript
public updateAllPlots(): void {
  const startTime = performance.now();
  const context: LogContext = {
    method: "updateAllPlots",
    action: "update",
    metadata: {
      plotCount: this.plots.length,
      speedMultiplier: this.speedMultiplier
    }
  };

  logger.debug("Starting plot updates", context);

  this.plots.forEach(plot => {
    this.updatePlot(plot.id);
  });

  const duration = performance.now() - startTime;
  logger.debug("Plot updates completed", {
    ...context,
    metadata: {
      ...context.metadata,
      updateDuration: Math.round(duration),
      averageTimePerPlot: Math.round(duration / this.plots.length)
    }
  });
}
```

## ⚙️ Logger Configuration

### Manual Configuration

```typescript
Logger.getInstance().configure({
	level: LogLevel.DEBUG, // Minimum log level
	enableTimestamps: false, // Show timestamps
	enableColors: true, // Use colors/icons
	enableStackTrace: false, // Show stack traces for errors
	enableMethodNames: true, // Extract method names
	enableGrouping: true, // Use console.group
	compactMode: false, // Single-line format
});
```

### Runtime Configuration

You can change logging modes at runtime in the browser console:

```javascript
// Switch to compact mode
Logger.getInstance().enableCompactMode();

// Switch to grouped mode
Logger.getInstance().enableGroupedMode();

// Enable debug logging
Logger.getInstance().configure({ level: 0 }); // LogLevel.DEBUG = 0

// Disable all logging except errors
Logger.getInstance().configure({ level: 3 }); // LogLevel.ERROR = 3
```

## 📊 Before vs After

### Before (Cluttered)

```
[2024-01-15T10:30:45.123Z][GameService][INFO][GameService.plantCrop][method:plantCrop,action:plant,plot:plot_001,crop:quantum_blueberry,plotState:empty,seedsAvailable:5] Successfully planted quantum_blueberry on plot_001
```

### After (Grouped Mode)

```
ℹ️ [GameService] Successfully planted quantum_blueberry on plot_001
  📋 Method: plantCrop
  ⚡ Action: plant
  🏡 Plot: plot_001
  🌱 Crop: quantum_blueberry
  📊 Data: { plotState: "empty", seedsAvailable: 5 }
```

### After (Compact Mode)

```
ℹ️ [GameService] → plant Successfully planted quantum_blueberry on plot_001
```

## 🎯 Benefits

1. **Visual Clarity**: Icons and grouping make logs easy to scan
2. **Collapsible**: Browser console groups can be collapsed/expanded
3. **Contextual**: Important information is highlighted with icons
4. **Flexible**: Switch between modes based on your needs
5. **Clean**: No more cluttered single-line logs
6. **Organized**: Related information is grouped together
7. **Better Traceability**: Know exactly which method and action caused an issue
8. **Rich Context**: Understand the state when the log was created
9. **Performance Insights**: Track timing and resource usage
10. **User Journey**: Follow user interactions through the system
11. **Debugging**: Stack traces and metadata help identify root causes
12. **Monitoring**: Structured data enables better log analysis tools

The enhanced logger makes debugging a much more pleasant experience with organized, readable output that you can easily scan and understand!
