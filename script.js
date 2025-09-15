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
