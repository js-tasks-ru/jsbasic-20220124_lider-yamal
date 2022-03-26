import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.renderGrid();
  }

  renderGrid() {
    this.grid = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">
          <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
      </div>
    `);

    this.renderProduct();

    return this.grid;
  }

  renderProduct() {
    const productGrid = this.grid.querySelector(".products-grid__inner");
  
    for (let product of this.products) {
      this.product = createElement(`
        <div class="card" id="${product.id}">
          <div class="card__top">
            <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
            <span class="card__price">€${product.price.toFixed([2])}</span>
          </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
    `);
      productGrid.append(this.product);
    }
  }

  onChange() {
    const controlsRow = document.querySelectorAll('.controls__row');

    controlsRow.forEach((control) => {
      control.addEventListener('click', (e) => {});
    });
    
  }

  updateFilter(filters) {
    this.filters = Object.assign(this.filters, filters);

    let productsGridInner = this.elem.querySelector('.products-grid__inner');
    productsGridInner.innerHTML = '';

    for (let product of this.products) {
      if (this.filters.noNuts === true && product.nuts === true) {
        continue;
      }
      if (this.filters.vegeterianOnly === true && product.vegeterian !== true) {
        continue;
      }
      if (this.filters.maxSpiciness !== undefined && this.filters.maxSpiciness < product.spiciness) {
        continue;
      }
      if (this.filters.category !== undefined && this.filters.category != product.category) {
        continue;
      }
      let productCard = new ProductCard(product);
      productsGridInner.append(productCard.elem);
    }
  }

}
