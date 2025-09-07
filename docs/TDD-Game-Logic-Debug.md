# Game Logic Debug System

## Problem Statement

**"How do we test game mechanics without waiting for real-time delays?"** - We need a way to validate farming mechanics, economy balance, and progression systems without waiting 5-60 minutes for crops to grow or hours for crafts to complete.

## Core Problems to Solve

### 1. **Time-Based Testing Problem**

- **Problem**: Crop growth takes 5-60 minutes, crafting takes 15-120 minutes
- **Impact**: Cannot iterate quickly on game balance or test edge cases
- **Need**: Way to skip time or accelerate game speed for testing

### 2. **Resource Testing Problem**

- **Problem**: Need specific amounts of credits, materials, seeds to test scenarios
- **Impact**: Cannot test economy balance or progression gates efficiently
- **Need**: Way to add/set resources instantly for controlled testing

### 3. **State Testing Problem**

- **Problem**: Need to test different plot states, station states, inventory conditions
- **Impact**: Cannot validate game logic for edge cases or error conditions
- **Need**: Way to manipulate game state directly for testing

### 4. **Save/Load Testing Problem**

- **Problem**: Need to verify game state persists correctly across sessions
- **Impact**: Cannot validate data integrity or catch save corruption bugs
- **Need**: Way to test save/load functionality repeatedly and reliably

## Required Debug Capabilities

### Time Manipulation Requirements

- **Game Speed Control**: Ability to run game at 1x, 2x, 5x, 10x speed
- **Time Skipping**: Skip forward by 5 minutes, 1 hour, 1 day, 1 week
- **Pause/Resume**: Stop and start game time for precise testing
- **Offline Progress**: Validate that offline time calculations work correctly

### Resource Manipulation Requirements

- **Credits**: Add or set specific credit amounts
- **Materials**: Add or set wood, stone, minerals
- **Seeds**: Add or set quantities of all crop seeds
- **Bulk Operations**: Give "starter resources" or "mid-game resources" instantly

### State Manipulation Requirements

- **Plot States**: Set individual plots to empty, growing, or ready states
- **Station States**: Set stations to idle, building, or crafting states
- **Inventory**: Add or remove items from inventory
- **Bulk Actions**: Complete all crops, complete all crafts, harvest all ready items

### Save/Load Testing Requirements

- **Save Game**: Export current game state to file or clipboard
- **Load Game**: Import game state from file or clipboard
- **Reset Game**: Return to default starting state
- **Validation**: Verify save data integrity and structure

## User Interface Requirements

### Debug Console Access

- **Toggle Method**: Keyboard shortcut (Ctrl+Shift+D) to show/hide debug console
- **Visual Design**: Overlay panel that doesn't interfere with game UI
- **Tab Organization**: Separate tabs for Time, Resources, State, and Testing
- **Mobile Friendly**: Touch-friendly buttons for mobile testing

### Keyboard Shortcuts

- **Ctrl+Shift+T**: Skip time 1 hour
- **Ctrl+Shift+C**: Complete all crops instantly
- **Ctrl+Shift+S**: Save game state
- **Ctrl+Shift+L**: Load game state
- **Ctrl+Shift+R**: Reset game to default state
- **Ctrl+Shift+1**: Give starter resources

### Console Commands

- **Browser Console Access**: Commands available in browser console for quick testing
- **Test Scenarios**: Pre-built test functions for common scenarios
- **Feedback**: Clear console output for all debug actions

## Test Scenarios

### Required Test Functions

- **testFarming()**: Complete farming cycle (plant → wait → harvest → sell)
- **testEconomy()**: Test economy balance with controlled resources
- **testCrafting()**: Test crafting system from start to finish
- **testSaveLoad()**: Test save/load functionality with data validation
- **testProgression()**: Test progression gates and unlocks

### Test Scenario Requirements

- **Automated Execution**: Run complete test scenarios with single command
- **Clear Feedback**: Console output showing test progress and results
- **State Validation**: Verify expected outcomes at each step
- **Error Handling**: Clear error messages when tests fail

## Automated Testing Requirements

### Test Categories

- **Farming Cycle Tests**: Validate complete plant → grow → harvest → sell workflow
- **Economy Balance Tests**: Verify crop profitability and crafting ROI calculations
- **Progression Gate Tests**: Test plot unlocking and station building requirements
- **Save/Load Tests**: Validate data persistence and integrity

### Test Validation Requirements

- **State Verification**: Check that game state matches expected values after each action
- **Error Detection**: Identify when tests fail and provide clear error messages
- **Batch Execution**: Run all tests with single command
- **Result Reporting**: Clear pass/fail status for each test category

## Save/Load Testing Requirements

### Data Validation Requirements

- **Required Fields**: Verify all essential game data is present in save files
- **Data Types**: Validate that numeric fields contain numbers, strings contain text
- **Data Integrity**: Check that relationships between data are maintained
- **Error Reporting**: Clear error messages when save data is corrupted

### Stress Testing Requirements

- **Iteration Testing**: Run save/load cycle multiple times to catch edge cases
- **Random State Testing**: Test with various game states to ensure robustness
- **State Verification**: Confirm that loaded state matches saved state exactly
- **Performance Testing**: Ensure save/load operations complete within reasonable time

## Success Criteria

### Debug System Must Enable

- **Rapid Iteration**: Test game mechanics without waiting for real-time delays
- **Economy Validation**: Verify balance and progression without grinding resources
- **Edge Case Testing**: Test error conditions and boundary cases easily
- **Save/Load Reliability**: Ensure data persistence works correctly
- **Development Efficiency**: Reduce time spent on manual testing

### Quality Assurance

- **No Game Breaking**: Debug tools cannot corrupt normal gameplay
- **Easy Access**: Debug features accessible but not intrusive
- **Clear Feedback**: All debug actions provide clear console output
- **Mobile Compatible**: Debug tools work on mobile devices for testing

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Next Review**: February 2025
