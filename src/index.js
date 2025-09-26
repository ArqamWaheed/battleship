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
  return { hit, isSunk, getHitsReceived };
}

export { Ship };
