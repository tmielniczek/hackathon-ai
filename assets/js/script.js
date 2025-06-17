document.addEventListener('DOMContentLoaded', (event) => {
    // Get the element by its ID
    const heroElement = document.getElementById('hero');

    // Check if the element exists to prevent errors
    if (heroElement) {
        // Function to set the hero element's height
        const setHeroHeight = () => {
            const windowHeight = window.innerHeight;
            heroElement.style.height = `${windowHeight}px`;
            console.log(heroElement.style.height);
        };

        // 1. Set height initially when the page loads
        setHeroHeight();
    }
});