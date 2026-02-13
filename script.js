document.addEventListener('DOMContentLoaded', () => {

    /* --- Navbar Scroll Effect --- */
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.padding = '10px 30px';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.padding = '15px 30px';
        }

        // Show/Hide Scroll Top Button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    /* --- Mobile Menu --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    /* --- Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    /* --- Smooth Scrolling for Navigation Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- Active Navigation Link on Scroll --- */
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    /* --- Modal Functionality --- */
    const modal = document.getElementById('project-modal');
    const projectBtn = document.querySelector('.project-info .btn');
    const closeModal = document.querySelector('.close-modal');

    if (projectBtn && modal) {
        projectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        const hideModal = () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Enable scrolling
        };

        closeModal.addEventListener('click', hideModal);

        // Close on clicking outside
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                hideModal();
            }
        });
    }

});
