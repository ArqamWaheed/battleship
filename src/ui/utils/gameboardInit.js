export function createGameGrid(containerId) {
  const container = document.querySelector(containerId);
  const grid = document.createElement("div");
  grid.className = "grid";

  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 11; col++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";

      if (row === 0 && col === 0) {
        cell.classList.add("header-cell");
      } else if (row === 0) {
        cell.classList.add("header-cell");
        cell.textContent = String.fromCharCode(64 + col);
      } else if (col === 0) {
        cell.classList.add("header-cell");
        cell.textContent = row.toString();
      } else {
        cell.dataset.row = row - 1;
        cell.dataset.col = col - 1;
      }

      grid.appendChild(cell);
    }
  }

  container.appendChild(grid);
}
