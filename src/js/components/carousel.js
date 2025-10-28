// This file implements a carousel component for showcasing projects or images in a sliding format.

class Carousel {
    constructor(element) {
        this.carouselElement = element;
        this.slides = this.carouselElement.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.init();
    }

    init() {
        this.showSlide(this.currentSlide);
        this.setupEventListeners();
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    setupEventListeners() {
        const nextButton = this.carouselElement.querySelector('.carousel-next');
        const prevButton = this.carouselElement.querySelector('.carousel-prev');

        nextButton.addEventListener('click', () => this.nextSlide());
        prevButton.addEventListener('click', () => this.prevSlide());
    }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
});