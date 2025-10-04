const $boardPlayer = document.querySelector(".board1");
const $boardComputer = document.querySelector(".board2");
const $gridPlayer = document.querySelector(".board1 .grid");
const $gridComputer = document.querySelector(".board2 .grid");
const $statusGridComputer = document.querySelector("#computer-status-grid");
const $statusGridPlayer = document.querySelector("#player-status-grid");
const $gameEndModal = document.querySelector("#game-end-modal");
const $restartBtn = document.querySelector("#restart-button");
const $modalMsg = document.querySelector("#modal-message");

export {
  $boardPlayer,
  $boardComputer,
  $gridPlayer,
  $gridComputer,
  $statusGridComputer,
  $statusGridPlayer,
  $gameEndModal,
  $restartBtn,
  $modalMsg,
};
