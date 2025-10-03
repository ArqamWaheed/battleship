import { Computer } from "./gameboardService.js";

function computerCoordinateToPlay() {
  return Computer.playableMoves.splice(
    [Math.floor(Math.random() * Computer.playableMoves.length)],
    1,
  );
}

export { computerCoordinateToPlay };
