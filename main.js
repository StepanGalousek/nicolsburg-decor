document.addEventListener('DOMContentLoaded', function() {

    // Hamburgerové menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburgerMenu.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Změna pozadí headeru při rolování
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Tlačítko "Zpět nahoru"
    const backToTopButton = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Zobrazit po odscrollování o 300px
            if (backToTopButton) backToTopButton.classList.add('show');
        } else {
            if (backToTopButton) backToTopButton.classList.remove('show');
        }
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Animace při scrollu
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Zobrazit, když je vidět 10% sekce

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

});
