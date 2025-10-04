function validateGridCellClick(element) {
  // Validates if you're actually clicking the game grid
  if (
    element.classList.contains("grid-cell") &&
    !element.classList.contains("header-cell") &&
    !element.classList.contains("hit") &&
    !element.classList.contains("miss")
  )
    return true;
  return false;
}

export { validateGridCellClick };
