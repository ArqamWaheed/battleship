function Ship(length) {
  let hitsReceived = 0;

  const hit = function () {
    hitsReceived++;
    return;
  };

  const isSunk = function () {
    if (hitsReceived >= length) {
      return true;
    }
    return false;
  };

  const getHitsReceived = function () {
    return hitsReceived;
  };

  const getLength = function() {
    return length;
  };

  return { hit, isSunk, getHitsReceived, getLength };
}

class Gameboard {
  constructor() { 
    this.aircraft = Ship(5);
    this.battleship = Ship(4);
    this.cruiser = Ship(3);
    this.destroyer1 = Ship(2);
    this.destroyer2 = Ship(2);
    this.submarine1 = Ship(1);
    this.submarine1 = Ship(1);
  }
}

export { Ship, Gameboard };
