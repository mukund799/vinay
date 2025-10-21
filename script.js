// Optional smooth scroll for navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close hamburger menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links ul li a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});