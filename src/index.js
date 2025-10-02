import "./styles.css";
import { createGameGrid } from "./ui/utils/gameboardInit.js";
import { Player } from "./core/services/gameboardService.js";
import "./ui/components/Gameboard.js";

// Initialize the grid
document.addEventListener("DOMContentLoaded", () => {
  createGameGrid(".board1");
  createGameGrid(".board2");
});
