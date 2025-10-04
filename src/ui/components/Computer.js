import { computerCoordinateToPlay } from "../../core/services/computerLogic.js";
import { Player } from "../../core/services/gameboardService.js";
import { AppState } from "../../core/state/AppState.js";
import {
  renderAttack,
  renderSwitchedTurn,
  identifyShipAtCoordinate,
} from "./Gameboard.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function computerPlayMove() {
  const coordinates = computerCoordinateToPlay(); // get the coordinates u want to play
  const shipName = identifyShipAtCoordinate(coordinates, Player);
  await delay(1000);
  AppState.attackInitiated(coordinates, shipName);
  if (AppState.checkGameEnd() == false) {
    AppState.switchTurn();
  }
}

export { computerPlayMove };
