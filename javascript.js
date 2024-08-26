const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('hidden');
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.remove('hidden');
});
