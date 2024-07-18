document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });


    window.addEventListener('scroll', highlightNavItem);

   
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});


function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function highlightNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}


function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    console.log('Form submitted:', { name, email, message });

    
    e.target.reset();

    
    alert('Thank you for your message. We will get back to you soon!');
}


function exploreCourses() {
   
    alert('Exploring courses... This feature is coming soon!');

}