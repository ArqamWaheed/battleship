const AppState = (function () {
  let currentTurn;
  let observers = {};
  let turnAttack = "miss";
  let Player;
  let Computer;
  let winner;

  const initialize = function (player, computer) {
    Player = player;
    Computer = computer;
    winner = null;
    currentTurn = player;
  };

  // Subscribe to specific events
  const subscribe = function (eventType, callback) {
    if (!observers[eventType]) {
      observers[eventType] = [];
    }
    observers[eventType].push(callback);
  };

  // Unsubscribe from events
  const unsubscribe = function (eventType, callback) {
    if (!observers[eventType]) return;
    observers[eventType] = observers[eventType].filter((cb) => cb !== callback);
  };

  // Notify all subscribers of a specific event
  const notify = function (eventType, data) {
    if (!observers[eventType]) return;
    observers[eventType].forEach((callback) => {
      try {
        callback(data);
      } catch (error) {
        console.error(`Error in ${eventType} observer:`, error);
      }
    });
  };

  const setCurrentTurn = function (value) {
    currentTurn = value;
    return;
  };

  const getCurrentTurn = function () {
    return currentTurn;
  };

  const getState = function () {
    return {
      currentTurn,
      winner,
    };
  };

  function SetTurnAttack(value) {
    turnAttack = value;
  }

  function GetTurnAttack() {
    return turnAttack;
  }

  function checkGameEnd() {
    if (Player.checkAllShipsSunk()) {
      winner = Computer;
      notify("endGame", getState());
      return true;
    } else if (Computer.checkAllShipsSunk()) {
      winner = Player;
      notify("endGame", getState());
      return true;
    }
    return false;
  }

  const switchTurn = function () {
    currentTurn = currentTurn === Player ? Computer : Player;

    notify("turnSwitched", getState());
    return;
  };

  const attackInitiated = function (coordinates) {
    notify("attackInitiated", {
      currentTurn: currentTurn,
      coordinates: coordinates,
      GetTurnAttack,
    });
  };

  return {
    subscribe,
    unsubscribe,
    notify,
    getCurrentTurn,
    getState,
    switchTurn,
    attackInitiated,
    SetTurnAttack,
    GetTurnAttack,
    setCurrentTurn,
    initialize,
    checkGameEnd,
  };
})();

export { AppState };
