import { Computer } from "../../core/services/gameboardService.js";
import { extractCoordinates, renderAttack } from "../components/Gameboard.js";
import { $gridComputer } from "../utils/DOMcache.js";
import { validateGridCellClick } from "../utils/Validations.js";

$gridComputer.addEventListener("click", function (e) {
  if (validateGridCellClick(e.target)) {
    const coordinates = extractCoordinates(e.target);
    const state = Computer.receiveAttack(coordinates); // hit or miss
    renderAttack(Computer, state, coordinates);
  }
});
