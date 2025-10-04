const AppState = (function () {
  let currentTurn = "Player";
  let observers = {};

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

  const getCurrentTurn = function () {
    return currentTurn;
  };

  const getState = function () {
    return {
      currentTurn,
    };
  };

  const switchTurn = function () {
    currentTurn = currentTurn === "Player" ? "Computer" : "Player";

    notify("turnSwitched", getState());

    return;
  };

  return {
    subscribe,
    unsubscribe,
    notify,
    getCurrentTurn,
    getState,
    switchTurn,
  };
})();

export { AppState };
