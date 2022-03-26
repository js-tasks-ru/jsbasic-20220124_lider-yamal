import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = createElement(`
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
      </div>
    </div>`);
    this.value = value;

    const stepsElem = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < steps; i++) {
      const span = createElement(`<span data-id="${i}"></span>`);      
      if (i === value)
        span.classList.add('slider__step-active');
      stepsElem.insertAdjacentElement('beforeend', span);
    }

    const sliderThumb = this.elem.querySelector('.slider__thumb');
    const progress = this.elem.querySelector('.slider__progress');
    const leftPercents = value / (steps - 1) * 100;
    sliderThumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    this.elem.onclick = (e) => {
      const spans = stepsElem.querySelectorAll('span');
      this.value = Math.round((e.clientX - this.elem.getBoundingClientRect().left) 
                                    / this.elem.offsetWidth    
                                    * (steps - 1));
      sliderThumb.querySelector('.slider__value').textContent = this.value;
            
      const leftPercents = this.value / (steps - 1) * 100;
      sliderThumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      
      const event = new CustomEvent('slider-change', {
                                      detail: this.value, 
                                      bubbles: true 
                                    });
      this.elem.dispatchEvent(event);

      for (const span of spans) {
        if (Number(span.dataset.id) !== this.value)
          span.classList.remove('slider__step-active');
        else span.classList.add('slider__step-active');
      }
    }
  }