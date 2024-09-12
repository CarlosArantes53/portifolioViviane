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

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        const loadingIcon = container.querySelector('.loading-icon');

        setTimeout(() => {
            const src = img.getAttribute('data-src');
            img.src = src;

            img.onload = () => {
                img.classList.add('loaded');
                loadingIcon.style.display = 'none';
            };
        }, 1000);
    });
});
