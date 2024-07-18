// script.js

// Smooth scrolling for navigation links and CTA button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Sticky navigation bar
  window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
  
  // Change background image at regular intervals
  let currentBackground = 1;
  const totalBackgrounds = 3; // Number of background images
  const heroContainer = document.querySelector('.hero-container');
  
  function changeBackground() {
    currentBackground = (currentBackground % totalBackgrounds) + 1;
    heroContainer.style.backgroundImage = `url('background${currentBackground}.jpg')`;
  }
  
  setInterval(changeBackground, 5000); // Change background every 5 seconds
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
  