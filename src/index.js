import "./styles.css";
import { createGameGrid } from "./ui/utils/gameboardInit.js";
import { Computer, Player } from "./core/services/gameboardService.js";
import "./ui/components/Gameboard.js";
import {
  renderAttack,
  renderGameEnd,
  renderShips,
  renderSwitchedTurn,
} from "./ui/components/Gameboard.js";
import "./ui/events/gameboardEvents.js";
import { AppState } from "./core/state/AppState.js";

AppState.subscribe("turnSwitched", renderSwitchedTurn);
AppState.subscribe("attackInitiated", Player.receiveAttack);
AppState.subscribe("attackInitiated", Computer.receiveAttack);
AppState.subscribe("attackInitiated", renderAttack);
AppState.subscribe("endGame", renderGameEnd);

// Initialize the grid
document.addEventListener("DOMContentLoaded", () => {
  createGameGrid(".board1");
  createGameGrid(".board2");
  renderShips();
});
