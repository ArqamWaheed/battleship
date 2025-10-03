import { Player, Computer } from "../../core/services/gameboardService.js";
import { $gridPlayer, $gridComputer } from "../utils/DOMcache.js";

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

function renderAttack(object, state, coordinates) {
  const [x, y] = coordinates;
  const $gridToRender = object == Computer ? $gridComputer : $gridPlayer;
  const $gridCell = $gridToRender.querySelector(
    `[data-row="${x}"][data-col="${y}"]`,
  );
  $gridCell.classList.add(state);
}

function extractCoordinates(element) {
  const xCoord = element.dataset.row;
  const yCoord = element.dataset.col;
  return [xCoord, yCoord];
}

export { renderShips, extractCoordinates, renderAttack };
