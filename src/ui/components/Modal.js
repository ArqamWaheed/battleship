import { $gameEndModal, $modalMsg } from "../utils/DOMcache.js";

export function toggleModal(winner) {
  $gameEndModal.classList.toggle("show");
  setModalWinner(winner);
  return;
}

function setModalWinner(winner) {
  $modalMsg.textContent = `The winner is ${winner}!`;
  return;
}
