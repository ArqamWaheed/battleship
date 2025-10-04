import { Player, Computer } from "../../core/services/gameboardService.js";
import {
  $gridPlayer,
  $gridComputer,
  $boardPlayer,
  $boardComputer,
  $statusGridPlayer,
  $statusGridComputer,
} from "../utils/DOMcache.js";
import { createGameGrid } from "../utils/gameboardInit.js";
import { toggleModal } from "./Modal.js";

function renderShips() {
  for (const i in Player.board) {
    for (const j in Player.board) {
      if (Player.board[i][j] !== null) {
        const $shipGridCell = $gridPlayer.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );
        $shipGridCell.classList.add("ship");
      }
    }
  }
}

// Observer function - reacts to turnSwitches
function renderSwitchedTurn(state) {
  if (state.currentTurn === Player) {
    $boardPlayer.style.opacity = 0.5;
    $boardComputer.style.opacity = 1;
  } else {
    $boardPlayer.style.opacity = 1;
    $boardComputer.style.opacity = 0.5;
  }
}

function flushGameboards() {
  // Remove all hit classes from status grids
  const allHitBlocks = document.querySelectorAll(".ship-block.hit");
  allHitBlocks.forEach((block) => block.classList.remove("hit"));
  $gridComputer.replaceChildren();
  $gridPlayer.replaceChildren();
}
function renderAttack(data) {
  const [x, y] = data.coordinates;

  const $gridToRender =
    data.currentTurn === Player ? $gridComputer : $gridPlayer;

  const $StatusGridToRender =
    data.currentTurn === Player ? $statusGridComputer : $statusGridPlayer;

  const $gridCell = $gridToRender.querySelector(
    `[data-row="${x}"][data-col="${y}"]`,
  );
  $gridCell.classList.add(data.GetTurnAttack());
  if (data.shipName !== null) {
    // Render the small grid if hit connects
    $StatusGridToRender
      .querySelector(`[data-ship="${data.shipName}"] .ship-block:not(.hit)`)
      .classList.add("hit");
  }
}

function extractCoordinates(element) {
  const xCoord = parseInt(element.dataset.row, 10);
  const yCoord = parseInt(element.dataset.col, 10);
  return [xCoord, yCoord];
}

function identifyShipAtCoordinate(coordinate, object) {
  const [x, y] = coordinate;
  if (object.board[x][y]?.name) return object.board[x][y].name;
  return null;
}

function renderGameEnd(data) {
  const winner = data.winner.instanceName;

  toggleModal(winner);
  flushGameboards();
  createGameGrid(".board1");
  createGameGrid(".board2");
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
  renderShips();
  return;
}

export {
  renderShips,
  extractCoordinates,
  renderAttack,
  renderSwitchedTurn,
  renderGameEnd,
  identifyShipAtCoordinate,
  flushGameboards,
};
