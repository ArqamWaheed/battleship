import { Gameboard } from "../src/core/models/Gameboard";

test("Gameboard ships initializiation test: ", () => {
  const testGameboard = new Gameboard();
  expect(testGameboard.aircraft.getLength()).toBe(5);
  expect(testGameboard.battleship.getLength()).toBe(4);
  expect(testGameboard.cruiser.getLength()).toBe(3);
  expect(testGameboard.destroyer1.getLength()).toBe(2);
  expect(testGameboard.submarine1.getLength()).toBe(1);
});

test("Gameboard board array initialization: ", () => {
  const testGameboard = new Gameboard();
  expect(testGameboard.board.length).toBe(10);
  expect(testGameboard.board[0].length).toBe(10);
});

test("Gameboard Place Ship Verification: ", () => {
  const testGameboard = new Gameboard();
  expect(testGameboard.board[0][3]).toBe(null);
  expect(testGameboard.board[1][3]).toBe(null);
  expect(testGameboard.board[2][3]).toBe(null);
  testGameboard.placeShip(testGameboard.cruiser, [0, 3], [2, 3]);
  expect(testGameboard.board[0][3]).toBe(testGameboard.cruiser);
  expect(testGameboard.board[1][3]).toBe(testGameboard.cruiser);
  expect(testGameboard.board[2][3]).toBe(testGameboard.cruiser);
  expect(testGameboard.board[3][3]).not.toBe(testGameboard.cruiser);
});

test("Gameboard receiveAttack functionality", () => {
  const testGameboard = new Gameboard();
  const coordinates = [0, 3];
  const coordinatesMiss = [3, 5];
  testGameboard.placeShip(testGameboard.cruiser, coordinates, [2, 3]);
  expect(testGameboard.cruiser.getHitsReceived()).toBe(0);
  testGameboard.receiveAttack(coordinates);
  expect(testGameboard.cruiser.getHitsReceived()).toBe(1);
  expect(testGameboard.missedShots).toEqual([]);
  testGameboard.receiveAttack(coordinatesMiss);
  expect(testGameboard.missedShots).toEqual([coordinatesMiss]);
});

test("Gameboard all sunk functions", () => {
  const testGameboard = new Gameboard();
  expect(testGameboard.checkAllShipsSunk()).toBe(false);

  for (let i = 0; i < 5; i++) {
    testGameboard.aircraft.hit();
  }
  for (let i = 0; i < 4; i++) {
    testGameboard.battleship.hit();
  }
  for (let i = 0; i < 3; i++) {
    testGameboard.cruiser.hit();
  }
  for (let i = 0; i < 2; i++) {
    testGameboard.destroyer1.hit();
  }
  for (let i = 0; i < 2; i++) {
    testGameboard.destroyer2.hit();
  }

  testGameboard.submarine1.hit();
  expect(testGameboard.checkAllShipsSunk()).toBe(false);
  testGameboard.submarine2.hit();
  expect(testGameboard.checkAllShipsSunk()).toBe(true);
});
