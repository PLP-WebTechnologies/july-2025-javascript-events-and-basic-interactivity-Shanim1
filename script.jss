// ============================
// Part 1: Event Handling
// ============================

// Theme Toggle (Light/Dark Mode)
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ============================
// Part 2: Interactive Elements
// ============================

// Counter
let count = 0;
const countValue = document.getElementById("countValue");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  countValue.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ============================
// Part 3: Form Validation
// ============================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting
  let isValid = true;

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  // Validate Name
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Final Result
  if (isValid) {
    document.getElementById("formMessage").textContent = "Form submitted successfully ✅";
    signupForm.reset();
  }
});
