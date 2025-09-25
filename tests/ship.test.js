import { Ship } from "../src";

test("Ships hit received: ", () => {
  let testShip = Ship(4);
  testShip.hit();
  testShip.hit();
  expect(testShip.getHitsReceived()).toBe(2);
});

test("Ships sinking: ", () => {
  let testShip = Ship(3);
  testShip.hit();
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
