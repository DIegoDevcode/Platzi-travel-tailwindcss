// script.js
const slides = document.querySelectorAll('.Card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

const visibleSlides = 3; // Número de imágenes visibles en el carrusel

function showSlide(slideIndex) {
    // Ocultar todas las diapositivas
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Mostrar las diapositivas visibles
    for (let i = slideIndex; i < slideIndex + visibleSlides; i++) {
        if (i < slides.length) {
            slides[i].style.display = 'block';
        }
    }
}

function nextSlide() {
    currentSlide += visibleSlides;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide -= visibleSlides;
    if (currentSlide < 0) {
        currentSlide = slides.length - visibleSlides;
    }
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostrar las primeras diapositivas al cargar la página
showSlide(currentSlide);
