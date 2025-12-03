let themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
  document.body.classList.toggle("dark");
};

function greetingMessage() {
  let greet = document.getElementById("greeting");
  let hour = new Date().getHours();

  if (hour < 12) {
    greet.textContent = "Good Morning";
  } else if (hour < 18) {
    greet.textContent = "Good Afternoon";
  } else {
    greet.textContent = "Good Evening";
  }
}

greetingMessage();

function showSection(sectionId) {
  let sections = document.getElementsByClassName("section");

  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  document.getElementById(sectionId).style.display = "block";
}

function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errors = document.getElementById("errors");

  errors.innerHTML = "";

  if (name === "") {
    errors.innerHTML += "Name cannot be empty.<br>";
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    errors.innerHTML += "Enter a valid email.<br>";
  }

  if (message.length < 10) {
    errors.innerHTML += "Message must be at least 10 characters.<br>";
  }

  if (errors.innerHTML === "") {
    errors.innerHTML = "Form submitted successfully!";
  }
}
