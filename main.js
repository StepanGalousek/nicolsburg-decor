document.addEventListener('DOMContentLoaded', function() {

    // Tlačítko "Zpět nahoru"
    const backToTopButton = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Zobrazit po odscrollování o 300px
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

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
