import { Player, Computer } from "../../core/services/gameboardService.js";
import { $gridPlayer } from "../utils/DOMcache.js";

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

export { renderShips };
