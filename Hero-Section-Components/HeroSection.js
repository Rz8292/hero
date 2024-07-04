document.addEventListener('DOMContentLoaded', function() {
  // Enter Site Button Logic
  const enterSiteButton = document.getElementById('enterSiteButton');
  const landingPage = document.getElementById('landingPage');
  const mainContent = document.getElementById('mainContent');
  
  enterSiteButton.addEventListener('click', function() {
    landingPage.style.display = 'none';
    mainContent.style.display = 'block';
  });

  // Dark-Light Theme Logic
  const toggleSwitch = document.querySelector('.switch .input');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply the current theme to the body
  document.body.setAttribute('data-theme', currentTheme);

  // Update the checkbox state based on the current theme
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }

  // Add event listener for the toggle switch
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

  // Scrolling Logic for Indian States
  document.addEventListener("DOMContentLoaded", function () {
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const citiesContainer = document.querySelector('.cities');
    let scrollAmount = 0;
    const step = 650; // Adjust the step value for smoother scrolling

    scrollLeftBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollAmount -= step;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        citiesContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollAmount += step;
        if (scrollAmount > citiesContainer.scrollWidth - citiesContainer.clientWidth) {
            scrollAmount = citiesContainer.scrollWidth - citiesContainer.clientWidth;
        }
        citiesContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});


  // Scrolling Logic for Top Destinations (Top Countries)
  const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const citiesContainer = document.querySelector('.cities');
    
    const step = 200; // Adjust as per your design for how much to scroll
    
    scrollLeftBtn.addEventListener('click', function(event) {
        event.preventDefault();
        citiesContainer.scrollBy({
            left: -step,
            behavior: 'smooth'
        });
    });
    
    scrollRightBtn.addEventListener('click', function(event) {
        event.preventDefault();
        citiesContainer.scrollBy({
            left: step,
            behavior: 'smooth'
        });
    });
});

  // Airlines Images Code
  const airlinesList = document.querySelector('.airlines-list');
  if (airlinesList) {
    const images = airlinesList.innerHTML;
    airlinesList.innerHTML += images;
  } else {
    console.error('Airlines list container not found.');
  }

