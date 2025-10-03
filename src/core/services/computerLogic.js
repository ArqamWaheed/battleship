import { Computer } from "./gameboardService";

function computerCoordinateToPlay() {
  return Computer.playableMoves[
    Math.floor(Math.random() * Computer.playableMoves.length)
  ];
}

export { computerCoordinateToPlay };
