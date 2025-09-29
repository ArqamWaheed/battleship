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

  const getLength = function () {
    return length;
  };

  return { hit, isSunk, getHitsReceived, getLength };
}

export { Ship };
