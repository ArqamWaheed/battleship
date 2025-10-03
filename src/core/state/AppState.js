const AppState = (function () {
  let currentTurn = "Player";

  const switchTurn = function () {
    currentTurn == "Player"
      ? (currentTurn = "Computer")
      : (currentTurn = "Player");
    return;
  };

  return {
    currentTurn,
    switchTurn,
  };
})();

export { AppState };
