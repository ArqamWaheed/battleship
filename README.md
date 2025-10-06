# Battleship Game

A classic Battleship game implementation built with vanilla JavaScript, featuring a player vs. computer gameplay experience.

## Overview

This project is a web-based implementation of the classic Battleship board game, created as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-battleship) curriculum. Players face off against a computer opponent in strategic naval warfare, attempting to sink all enemy ships before their own fleet is destroyed.

## Features

- **Interactive Gameplay**: Click on the computer's board to launch attacks
- **Visual Feedback**: 
  - Real-time ship status indicators showing hits and remaining health
  - Color-coded grid cells (green for ships, red for hits, gray for misses)
  - Opacity changes to indicate whose turn it is
- **Smart Computer Opponent**: AI automatically plays moves after the player's turn
- **Game State Management**: Observer pattern implementation for clean state updates
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Game End Modal**: Displays winner and allows instant restart

## Technologies Used

- **JavaScript (ES6+)**: Core game logic and DOM manipulation
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox/grid layouts and animations
- **Modular Architecture**: ES6 modules for organized, maintainable code

## Project Structure

```
src/
├── core/
│   ├── models/
│   │   ├── Gameboard.js      # Gameboard class with ship placement and attack logic
│   │   └── Ships.js           # Ship factory function
│   ├── services/
│   │   ├── computerLogic.js   # AI move selection
│   │   └── gameboardService.js # Game initialization
│   └── state/
│       └── AppState.js        # Global state management with observer pattern
├── ui/
│   ├── components/
│   │   ├── Computer.js        # Computer player logic
│   │   ├── Gameboard.js       # Rendering functions
│   │   └── Modal.js           # Game end modal
│   ├── events/
│   │   ├── gameboardEvents.js # Click event handlers
│   │   └── modalEvents.js     # Modal event handlers
│   └── utils/
│       ├── DOMcache.js        # Cached DOM references
│       ├── gameboardInit.js   # Grid initialization
│       └── Validations.js     # Input validation
├── index.html
├── index.js                   # Entry point
└── styles.css                 # Global styles
```

## Game Architecture

### Core Components

1. **Gameboard Class**: Manages the 10x10 game grid, ship placement, attack handling, and win condition checks
2. **Ship Factory**: Creates ship objects with hit tracking and sunk status
3. **AppState**: Centralized state management using the Observer pattern for reactive updates
4. **Computer Logic**: Random move selection from available coordinates

### Design Patterns

- **Factory Pattern**: Ship creation
- **Observer Pattern**: State changes notify subscribed components
- **Module Pattern**: AppState singleton for global state management
- **Event Delegation**: Efficient event handling on game grids

## Fleet Composition

Each player has 7 ships:
- 1 Aircraft Carrier (5 cells)
- 1 Battleship (4 cells)
- 1 Cruiser (3 cells)
- 2 Destroyers (2 cells each)
- 2 Submarines (1 cell each)

## How to Play

1. The game starts with both fleets pre-positioned on their respective boards
2. Player One (you) always goes first
3. Click on any cell in the Computer's board to attack
4. Green cells indicate your ships, red cells show hits, gray cells show misses
5. The ship status indicators on the sides show the health of each vessel
6. The computer automatically takes its turn after yours
7. The first player to sink all enemy ships wins
8. Click "Restart Game" to play again

## Key Features Explained

### Observer Pattern Implementation
The game uses a subscription-based system where components can subscribe to events like `turnSwitched`, `attackInitiated`, and `endGame`. This allows for clean separation of concerns and easy state updates.

### Turn-Based System
Visual opacity changes indicate the active player, preventing clicks on the opponent's board during their turn.

### Coordinate System
The game uses a 0-indexed coordinate system internally, with rows and columns from 0-9, displayed as 1-10 and A-J to players.

## Installation & Running

1. Clone the repository
2. Ensure you have a module bundler (Webpack, Vite, etc.) configured
3. Install dependencies (if any)
4. Run your development server
5. Open in browser

## Future Enhancements

Potential features to add:
- Random ship placement option for players
- Drag-and-drop ship positioning
- Difficulty levels for computer AI (hunt/target mode)
- Score tracking across multiple games
- Sound effects and animations
- Multiplayer mode
- Ship rotation during placement

## Credits

Created by **ArqamWaheed** as part of The Odin Project curriculum.

## License

This project is open source and available for educational purposes.
