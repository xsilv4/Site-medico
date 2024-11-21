let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Esconde todos os slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Mostra o slide atual
    currentSlide++;
    if (currentSlide > slides.length) currentSlide = 1; // Reinicia no primeiro slide
    slides[currentSlide - 1].classList.add('active');

    // Muda de slide a cada 5 segundos
    setTimeout(showSlides, 5000);
}

// Inicia o slideshow
showSlides();