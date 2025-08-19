// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// Animated skill bars when visible
const skillBars = document.querySelectorAll('.skill-bar');
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (barTop < windowHeight - 50) {
            bar.style.width = bar.dataset.progress;
        }
    });
};
window.addEventListener('scroll', animateSkillBars);

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run on page load