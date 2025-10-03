const AppState = (function () {
  let currentTurn = "Player";

  const getCurrentTurn = function () {
    return currentTurn;
  };
  const switchTurn = function () {
    currentTurn == "Player"
      ? (currentTurn = "Computer")
      : (currentTurn = "Player");
    return;
  };

  return {
    getCurrentTurn,
    switchTurn,
  };
})();

export { AppState };
