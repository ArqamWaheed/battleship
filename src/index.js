function Ship(length) {
  let hitsReceived = 0;

  const hit = function () {
    hitsReceived++;
    return;
  };

  const isSunk = function () {
    if (hitsReceived >= length) {
      return true;
    }
    return false;
  };

  const getHitsReceived = function () {
    return hitsReceived;
  };

  const getLength = function () {
    return length;
  };

  return { hit, isSunk, getHitsReceived, getLength };
}

class Gameboard {
  constructor() {
    this.aircraft = Ship(5);
    this.battleship = Ship(4);
    this.cruiser = Ship(3);
    this.destroyer1 = Ship(2);
    this.destroyer2 = Ship(2);
    this.submarine1 = Ship(1);
    this.submarine1 = Ship(1);
    this.board = this.#initializeGameboard();
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
    if (!this.verifyCoordinates(x1, y1) || !this.verifyCoordinates(x2, y2))
      throw Error("Invalid coordinates");
    this.board[x1][y1] = shipName;
    if (x1 - x2 !== 0) {
      for (let i = 1; i < Math.abs(x1 - x2) + 1; i++) {
        this.board[Math.min(x1, x2) + i][y1] = shipName;
      }
    }
    this.board[x2][y2] = shipName;
  }

  verifyCoordinates(x, y) {
    // Checks if its out of bound or occupied
    if (x > 9 || y > 9 || x < 0 || y < 0) return false;
    return this.board[x][y] === null ? true : false;
  }
}

export { Ship, Gameboard };
