// Team section auto-scroll
document.addEventListener('DOMContentLoaded', function () {
  const foundersContainer = document.querySelector('.founders');
  const founders = document.querySelectorAll('.founder');
  
  if (foundersContainer && founders.length > 0) {
    // Clone first three items and append to end for smooth infinite scroll
    const firstThree = Array.from(founders).slice(0, 3);
    firstThree.forEach(founder => {
      const clone = founder.cloneNode(true);
      foundersContainer.appendChild(clone);
    });

    let currentPosition = 0;
    const founderWidth = founders[0].offsetWidth;
    const gap = 40; // This matches the gap in CSS (2.5rem = 40px)
    const moveAmount = founderWidth + gap;

    function moveFounders() {
      currentPosition++;
      const translateX = currentPosition * -moveAmount;
      foundersContainer.style.transform = `translateX(${translateX}px)`;

      // Reset when we've shown all original items
      if (currentPosition >= founders.length) {
        setTimeout(() => {
          foundersContainer.style.transition = 'none';
          currentPosition = 0;
          foundersContainer.style.transform = 'translateX(0)';
          setTimeout(() => {
            foundersContainer.style.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }, 500);
      }
    }

    // Start auto-scroll
    const interval = setInterval(moveFounders, 1000);

    // Pause on hover
    // foundersContainer.addEventListener('mouseenter', () => clearInterval(interval));
    // foundersContainer.addEventListener('mouseleave', () => setInterval(moveFounders, 3000));
  }
});

// Smooth scroll only for same-page anchor links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle pure hash links that point to elements on this page
      if (href && href.startsWith('#') && !href.includes('.html')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
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