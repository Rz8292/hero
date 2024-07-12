// SKILLS

const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skill_header');

function toggleSkills() {
    const skillContent = this.parentNode.querySelector('.skills_list');
    const arrowIcon = this.querySelector('.skills_arrow');

    skillContent.classList.toggle('skills_open');

    if (skillContent.classList.contains('skills_open')) {
        skillContent.style.maxHeight = skillContent.scrollHeight + 'px';
        arrowIcon.style.transform = 'rotate(-180deg)';
    } else {
        skillContent.style.maxHeight = '0';
        arrowIcon.style.transform = 'rotate(0)';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,  .heading', { origin: 'top' });
ScrollReveal().reveal('.see-more a', { origin: 'right' });
ScrollReveal().reveal('.home-img, .services-container, .project-box,  .row', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.skills_container, .about-img,.info', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .head, .about-content,.contact form', { origin: 'right' });


// typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer','FrontEnd Developer', 'MERN Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// after clicking read more
document.getElementById('read-more-btn').addEventListener('click', function (event) {
    event.preventDefault();
    var secondContent = document.getElementsByClassName('second');
    for (var i = 0; i < secondContent.length; i++) {
        secondContent[i].classList.toggle('hidden');
    }
    event.target.textContent = event.target.textContent === 'Read More' ? 'Read Less' : 'Read More';
});






