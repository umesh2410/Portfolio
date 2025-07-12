// Lightweight Portfolio Effects

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize back to top button
    initBackToTop();

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Initialize scroll reveal
    initScrollReveal();

    // Initialize text gradient attributes
    initTextGradientAttributes();
});

// Text Gradient Attributes
function initTextGradientAttributes() {
    const gradientTexts = document.querySelectorAll('.text-gradient');

    gradientTexts.forEach(text => {
        if (!text.hasAttribute('data-text')) {
            text.setAttribute('data-text', text.textContent);
        }
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.project-card, .tech-icon, .timeline-item');

    if (revealElements.length === 0) return;

    const revealElementsOnScroll = function() {
        revealElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    revealElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });

    // Check on load
    revealElementsOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealElementsOnScroll);
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    // Add hover effect to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('nav-ripple');
            ripple.style.position = 'absolute';
            ripple.style.top = '0';
            ripple.style.left = '0';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.background = 'rgba(99, 102, 241, 0.2)';
            ripple.style.borderRadius = '8px';
            ripple.style.transform = 'scale(0)';
            ripple.style.opacity = '1';
            ripple.style.transition = 'all 0.6s ease';

            link.appendChild(ripple);

            setTimeout(() => {
                ripple.style.transform = 'scale(1)';
                ripple.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                link.removeChild(ripple);
            }, 600);
        });
    });

    // Add scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    // Initially hide the button
    backToTopBtn.style.display = 'none';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}
