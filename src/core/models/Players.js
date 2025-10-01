import { Gameboard } from "./Gameboard";

class Players {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}

export { Players };
