document.addEventListener('DOMContentLoaded', async () => {
    
    let hexagons = document.querySelectorAll('.hexagon');

    while (true) {
        const randoHex = hexagons[Math.floor(Math.random() * hexagons.length)];

        anime({
            targets: randoHex,        // Targets the element via CSS selector
            // scale: 0.9,        
            backgroundColor: '#420000', // Changes color during transit
            duration: 2000,         // Animation takes 2000ms (2 seconds)
            easing: 'easeInOutQuad',// Smooth acceleration and deceleration
            direction: 'alternate'  // Moves forward, then reverses back
        });

        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 1 second before starting the next animation
    }
});
