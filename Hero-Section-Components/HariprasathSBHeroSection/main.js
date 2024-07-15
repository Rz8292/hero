// Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu show 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden 
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SWIPER HOMES
const swiperHome = new Swiper('.home_swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',

      formatFractionCurrent: (number) => { return '0' + number},
      formatFractionTotal: (number) => { return '0' + number}
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});