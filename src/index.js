import "./styles.css";
import { createGameGrid } from "./ui/utils/gameboardInit.js";
import { Player } from "./core/services/gameboardService.js";
import "./ui/components/Gameboard.js";
import { renderShips } from "./ui/components/Gameboard.js";
import "./ui/events/gameboardEvents.js";

// Initialize the grid
document.addEventListener("DOMContentLoaded", () => {
  createGameGrid(".board1");
  createGameGrid(".board2");
  renderShips();
});
