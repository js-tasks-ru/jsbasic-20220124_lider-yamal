import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  pos = 0;
  currentSlide = 1;

  constructor(slides) {
    this.slides = slides;
    this.elem = this.renderSlider();
  }

  renderSlider() {
    this.carousel = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    </div>
    `);

    this.renderSlide();

    this.initCarousel();

    this.checkBtn();

    this.onClick();

    return this.carousel;
  }

  renderSlide() {
    const carouselInner = createElement(`<div class="carousel__inner"></div>`);

    for (const item of this.slides) {
      this.slide = createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${item.price.toFixed(2)}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
      </div>`);

      carouselInner.insertAdjacentElement("beforeend", this.slide);
    }
    
    this.carousel.insertAdjacentElement("beforeend", carouselInner);
  }

  initCarousel() {
    this.carouselInner = this.carousel.querySelector(".carousel__inner");
    this.slideCount = this.carouselInner.children.length;
    
    this.carousel.querySelector(".carousel__arrow_right").addEventListener("click", () => {
      this.pos += this.carouselInner.offsetWidth;
      ++this.currentSlide;
      this.setPos();
    });

    this.carousel.querySelector(".carousel__arrow_left").addEventListener("click", () => {
      this.pos -= this.carouselInner.offsetWidth;
      --this.currentSlide;
      this.setPos();
    });

  }
  checkBtn() {
    this.currentSlide === 1
      ? (this.carousel.querySelector(".carousel__arrow_left").style.display = "none")
      : (this.carousel.querySelector(".carousel__arrow_left").style.display = "");
      
    this.currentSlide === this.slideCount
      ? (this.carousel.querySelector(".carousel__arrow_right").style.display = "none")
      : (this.carousel.querySelector(".carousel__arrow_right").style.display = "");
  };

  setPos() {
    this.carouselInner.style.transform = `translateX(-${this.pos}px)`;

    this.checkBtn();
  }
  onClick() {
    const carouselButtons = this.carouselInner.querySelectorAll('.carousel__button');
    
    carouselButtons.forEach((carouselButton) => {
      carouselButton.addEventListener('click', (e) => {
        if (e.target.closest('.carousel__button')) {
          this.dispatchEvent(e.target.closest('.carousel__slide'));
        }
      });
    });
  }

  dispatchEvent(slide) {
    const productAdd = new CustomEvent('product-add', {
      detail: slide.dataset.id,
      bubbles: true
    });
    slide.dispatchEvent(productAdd);
  }
}
