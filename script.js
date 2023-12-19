const container = document.querySelector('#main-container');

// Creates a 16x16 grid of square divs
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#ff0000';
        });

        container.appendChild(square);
    }
}