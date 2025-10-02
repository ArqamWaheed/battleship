import { Gameboard } from "../models/Gameboard.js";

const Player = new Gameboard();
const Computer = new Gameboard();

Player.placeShip(Player.aircraft, [0, 0], [0, 4]);
Player.placeShip(Player.battleship, [1, 0], [1, 3]);
Player.placeShip(Player.cruiser, [2, 0], [2, 2]);
Player.placeShip(Player.destroyer1, [3, 0], [3, 1]);
Player.placeShip(Player.destroyer2, [4, 0], [4, 1]);
Player.placeShip(Player.submarine1, [5, 0], [5, 0]);
Player.placeShip(Player.submarine2, [6, 0], [6, 0]);

export { Player, Computer };
