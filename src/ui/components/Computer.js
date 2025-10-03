import { computerCoordinateToPlay } from "../../core/services/computerLogic.js";
import { Player } from "../../core/services/gameboardService.js";
import { AppState } from "../../core/state/AppState.js";
import { renderAttack, renderSwitchedTurn } from "./Gameboard.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function computerPlayMove() {
  const coordinates = computerCoordinateToPlay(); // get the coordinates u want to play
  await delay(1000);
  const state = Player.receiveAttack(coordinates); // hit or miss state
  renderAttack(Player, state, coordinates);
  AppState.switchTurn();
  renderSwitchedTurn();
}

export { computerPlayMove };
