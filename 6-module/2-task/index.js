import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.elem = this.handle();
    
  }

  renderCard() {
    return createElement(`
      <div class="card" id="${this.data.id}">
        <div class="card__top">
          <img src="/assets/images/products/${this.data.image}" class="card__image" alt="product">
          <span class="card__price">€${this.data.price.toFixed([2])}</span>
        </div>
      <div class="card__body">
        <div class="card__title">${this.data.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);
    
  }

  handle() {
    let card = this.renderCard();

    this.onClick(card);

    return card;

  }
  
  onClick(card) {
    const btn = card.querySelector('.card__button');

    btn.addEventListener('click', (e) => {
      if (e.target.closest('.card__button')) {
        let card = e.target.closest('.card');
        this.dispatchEvent(card);
      }
    });
  }

  dispatchEvent(card) {
    const productAdd = new CustomEvent('product-add', {
      detail: card.id,
      bubbles: true
    });

    card.dispatchEvent(productAdd);
  }
    
}
