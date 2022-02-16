function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselInner = document.querySelector(".carousel__inner");
  const slideCount = carouselInner.children.length;
  let currentSlide = 1;
  let pos = 0;

  checkBtn();

  arrowLeft.addEventListener("click", moveLeft);
  arrowRight.addEventListener("click", moveRigth);

  function moveLeft() {
    pos -= carouselInner.offsetWidth;
    ++currentSlide;
    setPos();
  }

  function moveRigth() {
    pos += carouselInner.offsetWidth;
    --currentSlide;
    setPos();
  }

  function setPos() {
    carouselInner.style.transform = `translateX(${pos}px)`;
    checkBtn();
  }

  function checkBtn() {
    currentSlide === 1 ? arrowRight.style.display = "none" : arrowRight.style.display = "";
    currentSlide === slideCount ? arrowLeft.style.display = "none" : arrowLeft.style.display = "";
    
  }
}
