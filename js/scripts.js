// Selectors
const container = document.querySelector('.container');
const black_btn = document.querySelector('#black-btn');
const random_btn = document.querySelector('#random-btn');
const reset_btn = document.querySelector('#reset-btn');

// Event listeners
document.addEventListener('DOMContentLoaded', createGrid(16))


// Functions
function createGrid(grid_size) {
  container.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`;

  for (let rows = 0; rows < grid_size; rows++) {
    for (let cols = 0; cols < grid_size; cols++) {
      const div = document.createElement('div');
      div.classList.add('item');
      container.appendChild(div);
    }
  }
}

