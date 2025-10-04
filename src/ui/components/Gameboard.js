import { Player, Computer } from "../../core/services/gameboardService.js";
import {
  $gridPlayer,
  $gridComputer,
  $boardPlayer,
  $boardComputer,
} from "../utils/DOMcache.js";

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

function renderAttack(data) {
  const [x, y] = data.coordinates;
  const $gridToRender =
    data.currentTurn === Player ? $gridComputer : $gridPlayer;
  const $gridCell = $gridToRender.querySelector(
    `[data-row="${x}"][data-col="${y}"]`,
  );
  $gridCell.classList.add(data.GetTurnAttack());
}

function extractCoordinates(element) {
  const xCoord = parseInt(element.dataset.row, 10);
  const yCoord = parseInt(element.dataset.col, 10);
  return [xCoord, yCoord];
}

function renderGameEnd(data) {
  console.log(data.winner.instanceName);
}

export {
  renderShips,
  extractCoordinates,
  renderAttack,
  renderSwitchedTurn,
  renderGameEnd,
};
