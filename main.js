document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMsg = document.getElementById('error-msg');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!email) {
    errorMsg.textContent = "Email cannot be empty.";
    emailInput.classList.add('error');
  } else if (!emailRegex.test(email)) {
    errorMsg.textContent = "Please provide a valid email.";
    emailInput.classList.add('error');
  } else {
    errorMsg.textContent = "";
    emailInput.classList.remove('error');
    alert("Thank you! You’re subscribed.");
  }
});