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
  testGameboard.placeShip(testGameboard.cruiser, [0, 3], [2, 3]);
  expect(testGameboard.board[0][3]).toBe(testGameboard.cruiser);
  expect(testGameboard.board[1][3]).toBe(testGameboard.cruiser);
  expect(testGameboard.board[2][3]).toBe(testGameboard.cruiser);
  expect(testGameboard.board[3][3]).not.toBe(testGameboard.cruiser);
});
