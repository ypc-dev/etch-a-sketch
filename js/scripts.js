// Selectors
const container = document.querySelector('.container');
const black_btn = document.querySelector('#black-btn');
const random_btn = document.querySelector('#random-btn');
const reset_btn = document.querySelector('#reset-btn');

// Event listeners
document.addEventListener('DOMContentLoaded', createGrid(16));
reset_btn.addEventListener('click', userDefineGridSize);
black_btn.addEventListener('click', colorBlack);
random_btn.addEventListener('click', colorRandom);

// Functions
function createGrid(grid_size) {
  container.innerHTML = '';
  container.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`;

  for (let rows = 0; rows < grid_size; rows++) {
    for (let cols = 0; cols < grid_size; cols++) {
      const div = document.createElement('div');
      div.classList.add('pixel');
      container.appendChild(div);
    }
  }
}

function userDefineGridSize() {
  let input = prompt('Enter a size for the new grid: ');

  if (input === null) {
    return;
  } else if (input < 1 || isNaN(input)) {
    do {
      input = Number(prompt('Enter a valid size for the new grid: '));
    } while (input < 1 || isNaN(input));
  }
  
  createGrid(input);
  black_btn.classList.remove('active');
  random_btn.classList.remove('active');
}

function colorBlack () {
  random_btn.classList.remove('active');
  black_btn.classList.add('active');
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', event => {
      pixel.style.backgroundColor = 'black';
    });
  });
}

function colorRandom () {
  random_btn.classList.add('active');
  black_btn.classList.remove('active');
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', event => {
      pixel.style.backgroundColor = '#' + randomColor();
    });
  });
}

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

