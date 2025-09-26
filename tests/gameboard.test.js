import { Gameboard } from "../src";

test("Gameboard ship initializiation test: ", () => {
    const testGameboard = new Gameboard();
    expect(testGameboard.aircraft.getLength()).toBe(5);
    expect(testGameboard.battleship.getLength()).toBe(4);
    expect(testGameboard.cruiser.getLength()).toBe(3);
    expect(testGameboard.destroyer1.getLength()).toBe(2);
    expect(testGameboard.submarine1.getLength()).toBe(1);

})