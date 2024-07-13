const buttons = document.querySelectorAll("#button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Slide up animation
        button.style.transform = "translateY(-20px)";
        button.style.transition = "transform 0.3s ease";

        // After a delay, slide back down
        setTimeout(() => {
            button.style.transform = "translateY(0)";
        }, 300);
    });
});

const quotes = [
    "Chess is life in miniature!",
    "The pawns are the soul of chess!",
    "Chess is everything: art, science and sports!"
];

let currentQuoteIndex = 0;

function displayNextQuote() {
    const typewriter = document.querySelector('.write');
    typewriter.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

displayNextQuote();

const typewriter = document.querySelector('.write');
        typewriter.addEventListener('animationiteration', () => {
            typewriter.style.animation = 'none';
            setTimeout(() => {
                typewriter.style.animation = 'typing 4s steps(40, end), blink-caret 6s step-end infinite';
                displayNextQuote();
            }, 100);
        });