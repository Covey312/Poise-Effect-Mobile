// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 10){
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});
