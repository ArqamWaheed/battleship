import { Gameboard } from "../models/Gameboard.js";
import { AppState } from "../state/AppState.js";

const Player = new Gameboard("Player");
const Computer = new Gameboard("Computer");

AppState.initialize(Player, Computer);

Player.placeShip(Player.aircraft, [2, 1], [2, 5]);
Player.placeShip(Player.battleship, [5, 3], [8, 3]);
Player.placeShip(Player.cruiser, [0, 7], [2, 7]);
Player.placeShip(Player.destroyer1, [7, 0], [7, 1]);
Player.placeShip(Player.destroyer2, [4, 8], [5, 8]);
Player.placeShip(Player.submarine1, [9, 5], [9, 5]);
Player.placeShip(Player.submarine2, [1, 9], [1, 9]);

Computer.placeShip(Computer.aircraft, [2, 1], [2, 5]);
Computer.placeShip(Computer.battleship, [5, 3], [8, 3]);
Computer.placeShip(Computer.cruiser, [0, 7], [2, 7]);
Computer.placeShip(Computer.destroyer1, [7, 0], [7, 1]);
Computer.placeShip(Computer.destroyer2, [4, 8], [5, 8]);
Computer.placeShip(Computer.submarine1, [9, 5], [9, 5]);
Computer.placeShip(Computer.submarine2, [1, 9], [1, 9]);

export { Player, Computer };
