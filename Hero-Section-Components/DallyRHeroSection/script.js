document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 1;


    const floatingElements = document.querySelectorAll('.circle, .triangle, .square, .hexagon, .star, .ellipse');
    floatingElements.forEach(el => {
        el.style.animationDuration = `${Math.random() * 5 + 5}s`;
    });

    // Moving text animations
    const movingTexts = document.querySelectorAll('.moving-text p');
    movingTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.5}s`;
    });
});
