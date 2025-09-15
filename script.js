// 🌙 Toggle Dark/Light Mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Feature
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// ❓ Collapsible FAQ
const questions = document.querySelectorAll(".question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("show");
  });
});

// 📋 Form Validation
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let valid = true;

  // Clear errors
  document.querySelectorAll(".error").forEach(err => err.textContent = "");

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Password validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be 8+ chars, include 1 uppercase and 1 number.";
    valid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    valid = false;
  }

  // Feedback
  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Registration successful!";
    document.getElementById("formMessage").style.color = "green";
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix the errors above.";
    document.getElementById("formMessage").style.color = "red";
  }
});
