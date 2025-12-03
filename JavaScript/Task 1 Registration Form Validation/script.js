const form = document.getElementById("regForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const phoneError = document.getElementById("phoneError");
const successMessage = document.getElementById("successMessage");

function clearMessages() {
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmError.innerText = "";
  phoneError.innerText = "";
  successMessage.innerText = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearMessages();
  let valid = true;

  const email = emailInput.value.trim();
  if (!(email.includes("@") && email.includes("."))) {
    emailError.innerText = 'Enter a valid email containing "@" and "."';
    valid = false;
  }

  const password = passwordInput.value;
  if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    valid = false;
  }

  const confirm = confirmInput.value;
  if (password !== confirm) {
    confirmError.innerText = "Passwords do not match";
    valid = false;
  }

  const phone = phoneInput.value.trim();
  if (!/^\d+$/.test(phone)) {
    phoneError.innerText = "Phone number must contain only digits";
    valid = false;
  }

  if (valid) {
    successMessage.innerText = "Registration Successful!";
    form.reset();
  }
});
