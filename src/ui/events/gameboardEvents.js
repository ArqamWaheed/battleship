import { Computer, Player } from "../../core/services/gameboardService.js";
import { AppState } from "../../core/state/AppState.js";
import { computerPlayMove } from "../components/Computer.js";
import { extractCoordinates, renderAttack } from "../components/Gameboard.js";
import { $gridComputer } from "../utils/DOMcache.js";
import { validateGridCellClick } from "../utils/Validations.js";

$gridComputer.addEventListener("click", function (e) {
  if (AppState.getCurrentTurn() == Player) {
    if (validateGridCellClick(e.target)) {
      const coordinates = extractCoordinates(e.target);
      AppState.attackInitiated(coordinates); // hit or miss state
      AppState.switchTurn();
      computerPlayMove();
    }
  }
});

console.log(Computer.playableMoves[0]);
