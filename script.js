function promptUser() {
    const squaresPerSide = prompt('Enter the number of squares per side (maximum 100): ')
    
    if (squaresPerSide && !isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(parseInt(squaresPerSide));
    }
    else {
        alert('Invalid input. Please enter a number between 1 and 100.');
    }
}

function createGrid(squaresPerSide) {
    const container = document.querySelector('#main-container');

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Creates a 16x16 grid of square divs
    for(let i = 0; i < squaresPerSide; i++) {
        for(let j = 0; j < squaresPerSide; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = '#ff0000';
            });

            container.appendChild(square);
        }
    }

    container.style.width = `${squaresPerSide * 16}px`;
    
}

createGrid(16);

const btn = document.querySelector('#popup-btn');
btn.addEventListener('click', promptUser);