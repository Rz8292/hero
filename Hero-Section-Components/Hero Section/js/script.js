document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('hidden');
    });
  }

  // Subscription form interaction
  const emailInput = document.getElementById('email-input');
  const subscribeBtn = document.getElementById('subscribe-btn');

  if (emailInput && subscribeBtn) {
    subscribeBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission for demo purposes
      const email = emailInput.value.trim();
      if (email !== '') {
        alert(`Subscribed with email: ${email}`);
        emailInput.value = ''; // Clear input after subscribing (demo)
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  // Testimonial hover effects
  const testimonial1 = document.getElementById('testimonial-1');
  const testimonial2 = document.getElementById('testimonial-2');
  const testimonial3 = document.getElementById('testimonial-3');

  function addHoverEffect(testimonial) {
    if (testimonial) {
      testimonial.addEventListener('mouseenter', () => {
        testimonial.classList.add('bg-gray-200');
      });
      testimonial.addEventListener('mouseleave', () => {
        testimonial.classList.remove('bg-gray-200');
      });
    }
  }

  addHoverEffect(testimonial1);
  addHoverEffect(testimonial2);
  addHoverEffect(testimonial3);

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
