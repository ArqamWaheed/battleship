import { Gameboard } from "./Gameboard.js";

class Players {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}

export { Players };
