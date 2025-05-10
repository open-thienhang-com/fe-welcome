document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const emailInput = document.getElementById('email');
  const errorMsg = document.getElementById('error-msg');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset error message initially
  errorMsg.classList.remove('show');
  
  if (!email) {
    errorMsg.textContent = 'Please enter your email.';
    errorMsg.classList.add('show');
    emailInput.classList.add('error');
  } else if (!emailRegex.test(email)) {
    errorMsg.textContent = 'Please provide a valid email.';
    errorMsg.classList.add('show');
    emailInput.classList.add('error');
  } else {
    errorMsg.textContent = '';
    errorMsg.classList.remove('show');
    emailInput.classList.remove('error');
    alert('Thank you for subscribing!');
  }
});
