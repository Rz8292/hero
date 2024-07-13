let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingcart.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".hero-slider", {
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
});


var swiper = new Swiper(".review-slider", {
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    spaceBetween:20,
    centeredSlides:true,
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
});