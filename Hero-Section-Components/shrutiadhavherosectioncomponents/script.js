document.querySelector('.email-subscription .btn').addEventListener('click', function(e) {
    const emailInput = document.querySelector('.email-subscription input');
    const emailValue = emailInput.value;
  
    if (!validateEmail(emailValue)) {
      alert('Please enter a valid email address');
      e.preventDefault();
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  