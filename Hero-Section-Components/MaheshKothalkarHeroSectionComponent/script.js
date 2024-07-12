function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    const navUl = document.querySelector('nav ul');
    navBar.classList.toggle('active');
    navUl.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.hero-right .text');
    const heroImage = document.getElementById('hero-image');

    texts.forEach(text => {
        text.addEventListener('click', () => {
            const newImageSrc = text.getAttribute('data-image');
            if (newImageSrc) {
                heroImage.src = newImageSrc;
            }
        });
    });
});
