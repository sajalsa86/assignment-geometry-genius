// Function to generate random background color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners to each card to change background color on hover
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        card.style.backgroundColor = randomColor;
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'azure'; // Change back to the default color after hover
    });
});