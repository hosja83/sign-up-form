const password = document.getElementById('password');
const confirmation = document.getElementById('confirm-password');
const form = document.getElementById('create-account');
const label = document.querySelector('.password-label');

form.addEventListener('submit', handleMismatchPasswords);

function handleMismatchPasswords(event) {
  event.preventDefault();
  const exists = document.querySelector('small.match') || false;
  if (exists) label.removeChild(document.querySelector('small.match'));
  if (password.value !== confirmation.value) {
    let mismatch = document.createElement('small');
    mismatch.classList.add('match');
    label.appendChild(mismatch);
    mismatch.textContent = "*Passwords do not match";
    mismatch.style.color = "#c13838";
    confirmation.value = "";
    confirmation.style = "border: 2px solid #c13838;";
    password.style = "border: 2px solid #c13838;";
    confirmation.addEventListener('focus', removeMismatchEvents);
    password.addEventListener('focus', removeMismatchEvents);
  }
}

function removeMismatchEvents() {
  let mismatch = document.querySelector('small.match');
  password.style.border = "none";
  confirmation.style.border = "none";
  password.removeEventListener('focus', removeMismatchEvents);
  confirmation.removeEventListener('focus', removeMismatchEvents);
  label.removeChild(mismatch);
}