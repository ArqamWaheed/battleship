import { Computer } from "../../core/services/gameboardService.js";
import { AppState } from "../../core/state/AppState.js";
import { computerPlayMove } from "../components/Computer.js";
import {
  extractCoordinates,
  renderAttack,
  renderSwitchedTurn,
} from "../components/Gameboard.js";
import { $gridComputer } from "../utils/DOMcache.js";
import { validateGridCellClick } from "../utils/Validations.js";

$gridComputer.addEventListener("click", function (e) {
  if (AppState.getCurrentTurn() == "Player") {
    if (validateGridCellClick(e.target)) {
      const coordinates = extractCoordinates(e.target);
      const state = Computer.receiveAttack(coordinates); // hit or miss state
      renderAttack(Computer, state, coordinates);
      AppState.switchTurn();
      renderSwitchedTurn();
      computerPlayMove();
    }
  }
});

console.log(Computer.playableMoves[0]);
