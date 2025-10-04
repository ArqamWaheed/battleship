const AppState = (function () {
  let currentTurn;
  let observers = {};
  let turnAttack = "miss";
  let Player;
  let Computer;

  const initialize = function (player, computer) {
    Player = player;
    Computer = computer;
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
    observers[eventType].forEach((callback) => callback(data));
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
    };
  };

  function SetTurnAttack(value) {
    turnAttack = value;
  }

  function GetTurnAttack() {
    return turnAttack;
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
  };
})();

export { AppState };
