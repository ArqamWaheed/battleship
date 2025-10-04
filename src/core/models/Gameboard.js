import { AppState } from "../state/AppState.js";
import { Ship } from "./Ships.js";

class Gameboard {
  constructor(name) {
    this.instanceName = name;
    this.aircraft = { ...Ship(5), name: "aircraft" };
    this.battleship = { ...Ship(4), name: "battleship" };
    this.cruiser = { ...Ship(3), name: "cruiser" };
    this.destroyer1 = { ...Ship(2), name: "destroyer1" };
    this.destroyer2 = { ...Ship(2), name: "destroyer2" };
    this.submarine1 = { ...Ship(1), name: "submarine1" };
    this.submarine2 = { ...Ship(1), name: "submarine2" };
    this.board = this.#initializeGameboard();
    this.playableMoves = this.#initializePlayableMoves();
    this.missedShots = []; // 2D Array containing all the missed shots
  }

  resetGameboard = () => {
    this.aircraft = { ...Ship(5), name: "aircraft" };
    this.battleship = { ...Ship(4), name: "battleship" };
    this.cruiser = { ...Ship(3), name: "cruiser" };
    this.destroyer1 = { ...Ship(2), name: "destroyer1" };
    this.destroyer2 = { ...Ship(2), name: "destroyer2" };
    this.submarine1 = { ...Ship(1), name: "submarine1" };
    this.submarine2 = { ...Ship(1), name: "submarine2" };
    this.board = this.#initializeGameboard();
    this.playableMoves = this.#initializePlayableMoves();
    this.missedShots = []; // 2D Array containing all the missed shots
  };

  #initializeGameboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = Array(10).fill(null);
    }
    return board;
  }

  #initializePlayableMoves() {
    const playableMoves = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        playableMoves.push([i, j]);
      }
    }
    return playableMoves;
  }

  placeShip(shipName, startingCoord, endingCoord) {
    const [x1, y1] = startingCoord;
    const [x2, y2] = endingCoord;

    this.#verifyCoordinates(x1, y1); // Error handling
    if (
      !this.#verifyOccupiedCoordinates(x1, y1) ||
      !this.#verifyOccupiedCoordinates(x2, y2)
    )
      throw Error("Spot already occupied");

    this.board[x1][y1] = shipName;
    if (x1 - x2 !== 0) {
      for (let i = 1; i < Math.abs(x1 - x2) + 1; i++) {
        this.board[Math.min(x1, x2) + i][y1] = shipName;
      }
    }
    if (y1 - y2 !== 0) {
      for (let i = 1; i < Math.abs(y1 - y2) + 1; i++) {
        this.board[x1][Math.min(y1, y2) + i] = shipName;
      }
    }
    this.board[x2][y2] = shipName;
    return;
  }

  #verifyCoordinates(x, y) {
    // Checks if its out of bound or occupied
    if (x > 9 || y > 9 || x < 0 || y < 0) throw Error("Out Of Bounds");
  }

  #verifyOccupiedCoordinates(x, y) {
    // returns true if spot is not occupied
    return this.board[x][y] === null ? true : false;
  }

  receiveAttack = (data) => {
    if (data.currentTurn.instanceName.toString() !== this.instanceName) {
      const [x1, y1] = data.coordinates;
      this.#verifyCoordinates(x1, y1);

      const isAlreadyMissed = this.missedShots.some(
        ([x, y]) => x === x1 && y === y1,
      );

      if (!this.#verifyOccupiedCoordinates(x1, y1) && !isAlreadyMissed) {
        this.board[x1][y1].hit();
        AppState.SetTurnAttack("hit");
        return;
      } else if (!isAlreadyMissed) {
        this.missedShots.push(data.coordinates);
        AppState.SetTurnAttack("miss");
        return;
      } else {
        throw Error("Coordinate already attacked");
      }
    }
  };

  checkAllShipsSunk() {
    return (
      this.aircraft.isSunk() &&
      this.battleship.isSunk() &&
      this.cruiser.isSunk() &&
      this.destroyer1.isSunk() &&
      this.destroyer2.isSunk() &&
      this.submarine1.isSunk() &&
      this.submarine2.isSunk()
    );
  }

  randomizeShipPlacement() {
    // List of ships with their corresponding objects and lengths
    const ships = [
      { ship: this.aircraft, length: 5 },
      { ship: this.battleship, length: 4 },
      { ship: this.cruiser, length: 3 },
      { ship: this.destroyer1, length: 2 },
      { ship: this.destroyer2, length: 2 },
      { ship: this.submarine1, length: 1 },
      { ship: this.submarine2, length: 1 },
    ];

    // Place each ship randomly
    for (const { ship, length } of ships) {
      let placed = false;

      while (!placed) {
        // Random orientation: 0 = horizontal, 1 = vertical
        const isVertical = Math.random() < 0.5;

        // Random starting position
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        // Calculate ending position based on orientation
        let endX = x;
        let endY = y;

        if (isVertical) {
          endX = x + (length - 1);
        } else {
          endY = y + (length - 1);
        }

        // Check if placement is valid
        if (endX < 10 && endY < 10) {
          try {
            // Check if all positions are free
            let canPlace = true;
            if (isVertical) {
              for (let i = 0; i < length; i++) {
                if (!this.#verifyOccupiedCoordinates(x + i, y)) {
                  canPlace = false;
                  break;
                }
              }
            } else {
              for (let i = 0; i < length; i++) {
                if (!this.#verifyOccupiedCoordinates(x, y + i)) {
                  canPlace = false;
                  break;
                }
              }
            }

            if (canPlace) {
              this.placeShip(ship, [x, y], [endX, endY]);
              placed = true;
            }
          } catch (error) {
            // If placement fails, try again
            continue;
          }
        }
      }
    }
  }
}

export { Gameboard };
