import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.elem = createElement(`
      <div class="card" id="${product.id}">
        <div class="card__top">
            <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
            <span class="card__price">€${Number(product.price).toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
    `);
    
    this.elem.querySelector('button').addEventListener('click', () => {
      const e = new CustomEvent('product-add', { detail: product.id, bubbles: true });
      this.elem.dispatchEvent(e);
    })
  }
}