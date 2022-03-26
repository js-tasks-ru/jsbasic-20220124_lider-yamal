import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.renderRibbon();
  }

  renderRibbon() {
    this.ribbon = createElement(`
      <div class="ribbon">
      
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner"></nav>

      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);
    this.inner();

    this.clickArrow();

    return this.ribbon;
  }

  inner() {
    this.ribbonInner = this.ribbon.querySelector(".ribbon__inner");

    for (let category of this.categories) {
      const ribbonItem = createElement(`<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`);

      this.ribbonInner.append(ribbonItem);
    }
   
    this.activeLink();
  }

  clickArrow() {
    this.arrowRight = this.ribbon.querySelector(".ribbon__arrow_right");
    this.arrowLeft = this.ribbon.querySelector(".ribbon__arrow_left");

    this.arrowRight.addEventListener("click", () => {
      this.ribbonInner.scrollBy(350, 0);
    });

    this.arrowLeft.addEventListener("click", () => {
      this.ribbonInner.scrollBy(-350, 0);
    });

    this.ribbonInner.addEventListener("scroll", () => {
      let scrollWidth = this.ribbonInner.scrollWidth;
      let scrollLeft = this.ribbonInner.scrollLeft;
      let clientWidth = this.ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        this.arrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        this.arrowLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight == 0) {
        this.arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        this.arrowRight.classList.add('ribbon__arrow_visible');
      }

    });
  }

  activeLink() {
    const links = this.ribbonInner.querySelectorAll('.ribbon__item');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        links.forEach(el => el.classList.remove('ribbon__item_active'));

        e.target.classList.add('ribbon__item_active');
        this.select(e.target.dataset);
      });
    });
    
  }

  select(category) {
    const ribbonSelect = new CustomEvent('ribbon-select', {
      detail: category.id,
      bubbles: true
    });
    this.ribbonInner.dispatchEvent(ribbonSelect);
  }

  

 
}
