import { Player, Computer } from "../../core/services/gameboardService.js";

function waitForGrid() {
  return new Promise((resolve) => {
    function checkGrid() {
      const $gridPlayer = document.querySelector(".board1 .grid");
      if ($gridPlayer) {
        resolve($gridPlayer);
      } else {
        setTimeout(checkGrid, 10); // Check every 10ms
      }
    }
    checkGrid();
  });
}

waitForGrid().then(($gridPlayer) => {
  for (const i in Player.board) {
    for (const j in Player.board) {
      if (Player.board[i][j] !== null) {
        const $shipGridCell = $gridPlayer.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );
        $shipGridCell.classList.add("ship");
        console.log("ye");
      }
    }
  }
});
