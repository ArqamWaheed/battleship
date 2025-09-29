import { Ship } from "./Ships";

class Gameboard {
  constructor() {
    this.aircraft = Ship(5);
    this.battleship = Ship(4);
    this.cruiser = Ship(3);
    this.destroyer1 = Ship(2);
    this.destroyer2 = Ship(2);
    this.submarine1 = Ship(1);
    this.submarine2 = Ship(1);
    this.board = this.#initializeGameboard();
    this.missedShots = []; // 2D Array containing all the missed shots
  }

  #initializeGameboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = Array(10).fill(null);
    }
    return board;
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

    if (!this.verifyOccupiedCoordinates) this.board[x1][y1] = shipName;
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

  receiveAttack(coordinates) {
    const [x1, y1] = coordinates;
    this.#verifyCoordinates(x1, y1);

    if (
      !this.#verifyOccupiedCoordinates(x1, y1) &&
      !this.missedShots.includes(coordinates)
    ) {
      // Call hit method if ship exists
      this.board[x1][y1].hit(); // call the hit method on the ship instance.
    } else if (!this.missedShots.includes(coordinates)) {
      // Add to misses if the coordinate has not already been struck
      this.missedShots.push(coordinates);
    } else {
      throw Error("Wtf how u genuinely get here"); // Called the method, theres no ship here and it was a miss coordinate which should not be called in the first place
    }
  }

  checkAllShipsSunk() {
    return (
      this.aircraft.isSunk() &&
      this.battleship.isSunk() &&
      this.cruiser.isSunk() &&
      this.destroyer1.isSunk() &&
      this.destroyer2.isSunk() &&
      this.submarine1.isSunk() &&
      this.submarine2.isSunk()
    ); // Note: you had submarine1 twice, should be submarine2
  }
}

export { Gameboard };
