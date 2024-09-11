// Função para adicionar animação ao rolar a página
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
