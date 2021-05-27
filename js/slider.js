const slides = document.querySelectorAll('.about_us_slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slidesWrapper = document.querySelector('.about_us__wraper');
const slidesField = document.querySelector('.abouts_us_inner');
const width = window.getComputedStyle(slidesWrapper).width;

// let slideIndex = 1;
let offset = 0;

slidesField.style.width = 100 * slides.length + '%';
slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
    if(offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});