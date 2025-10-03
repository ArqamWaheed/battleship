import { Computer } from "./gameboardService.js";

function computerCoordinateToPlay() {
  const index = Math.floor(Math.random() * Computer.playableMoves.length);
  return Computer.playableMoves.splice(index, 1)[0];
}

export { computerCoordinateToPlay };
