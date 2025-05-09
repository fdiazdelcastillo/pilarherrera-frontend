const slider = document.querySelector('.testimonios-slider');
const container = document.querySelector('.testimonios-container');
const testimonials = document.querySelectorAll('.testimonio');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const testimonialWidth = testimonials[0].offsetWidth;
const totalTestimonials = testimonials.length;
const total = testimonials.length;

function updateSlider() {
    const translateValue = -currentIndex * testimonialWidth;
    container.style.transform = `translateX(${translateValue}px)`;

    // Ocultar o mostrar botones según el índice actual
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === total - 1 ? "none" : "block";
}

function goToPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
}

function goToNext() {
    currentIndex = Math.min(currentIndex + 1, totalTestimonials - 1);
    updateSlider();
}

prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);


updateSlider();

let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // umbral mínimo para detectar un swipe
        if (diff > 0 && currentIndex < totalTestimonials - 1) {
            goToNext(); // swipe izquierda → siguiente testimonio
        } else if (diff < 0 && currentIndex > 0) {
            goToPrev(); // swipe derecha → testimonio anterior
        }
    }

    // Reiniciar valores
    startX = 0;
    endX = 0;
});
