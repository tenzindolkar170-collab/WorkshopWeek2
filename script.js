// MOBILE NAV MENU
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

// CONTACT FORM HANDLING
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.textContent = "Please fill out all fields.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Thank you! Your message has been sent.";
  msg.style.color = "green";
  form.reset();
});
