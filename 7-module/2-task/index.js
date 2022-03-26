import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.body = document.body;
    this.renderModal();
  }

  open() {
    this.btnClose();
    this.keyEsc();
  }

  renderModal() {
    this.modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body">A сюда нужно добавлять содержимое тела модального окна</div>
        </div>
      </div>
  `);

    this.body.append(this.modal);

    this.body.classList.add("is-modal-open");

  }

  setTitle(title) {
    const modalTitle = this.modal.querySelector('.modal__title');
   
    modalTitle.innerHTML = `${title}`;
  }

  setBody(body) {
    let modalBody = this.modal.querySelector('.modal__body');
    modalBody.innerHTML = `${body.textContent}`;
  }

  close() {
    this.modal.remove();

    this.body.classList.remove('is-modal-open');
  }

  btnClose() {
    const closeBtn = this.modal.querySelector('.modal__close').addEventListener('click', () => {
      this.modal.remove();

      this.body.classList.remove('is-modal-open');
    });
  }

  keyEsc() {
    document.addEventListener('keydown', (event) => {
      if (event.code == 'Escape') {
        this.modal.remove();

        this.body.classList.remove('is-modal-open');
      }
    });
  }
}
