// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Responsive navigation menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Add 3D tilt effect to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.transform = `rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
});
