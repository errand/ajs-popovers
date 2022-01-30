/* eslint-disable class-methods-use-this */
export default class Popover {
  constructor(element) {
    this.element = element;
    this.registerEvents();
  }

  checkBinding() {
    if (this.element === null) {
      throw new Error('Element not bind to DOM');
    }
  }

  registerEvents() {
    this.checkBinding();
    this.element.addEventListener('click', this.clickedPopover);
  }

  clickedPopover = e => {
    e.preventDefault();
    const el = e.target;
    if (el.getAttribute('aria-describedby')) {
      const id = el.getAttribute('aria-describedby');
      el.removeAttribute('aria-describedby');
      this.removePopover(id);
    } else {
      const id = `ajs-${this.getRandomInt()}`;
      el.setAttribute('aria-describedby', id);
      this.createPopover(id, el.dataset.ajsTitle, el.dataset.ajsContent, el.dataset.ajsPosition);
    }
  }

  createPopover(id, title, content, position = 'bottom') {
    const popover = document.createElement('div');
    popover.id = id;
    popover.classList.add('popover');
    popover.dataset.popoverPosition = position;
    popover.innerHTML = `
      <h3 class="popover-header">${title}</h3>
      <div class="popover-body">${content}</div>
      </div>
    `;

    document.querySelector('body').appendChild(popover);

    this.movePopovers();
  }

  movePopovers() {
    const popovers = [...document.querySelectorAll('.popover')];
    if (popovers) {
      popovers.forEach(popover => {
        const popoverTrigger = document.querySelector(`[aria-describedby="${popover.id}"]`);
        const popoverTriggerPosition = popoverTrigger.getBoundingClientRect();
        const element = popover;

        switch (popover.dataset.popoverPosition) {
          case ('top'):
            element.style.top = `${popoverTriggerPosition.top - popoverTriggerPosition.height - 10}px`;
            element.style.left = `${popoverTriggerPosition.x + popoverTriggerPosition.width / 2}px`;
            element.style.transform = 'translateX(-50%)';
            break;

          case ('bottom'):
            element.style.top = `${popoverTriggerPosition.top + popoverTriggerPosition.height + 5}px`;
            element.style.left = `${popoverTriggerPosition.x + popoverTriggerPosition.width / 2}px`;
            element.style.transform = 'translateX(-50%)';
            break;

          case ('left'):
            element.style.top = `${popoverTriggerPosition.top}px`;
            element.style.left = `${popoverTriggerPosition.x - 5}px`;
            element.style.transform = 'translate(-100%, -50%)';
            break;

          case ('right'):
            element.style.top = `${popoverTriggerPosition.top}px`;
            element.style.left = `${popoverTriggerPosition.x + popoverTriggerPosition.width + 5}px`;
            element.style.transform = 'translateY(-50%)';
            break;

          default:
            element.style.top = `${popoverTriggerPosition.top + popoverTriggerPosition.height}px`;
            element.style.left = `${popoverTriggerPosition.x + (popoverTriggerPosition.width / 2)}px`;
            element.style.transform = 'translateX(-50%)';
            break;
        }
      });
    }
  }

  removePopover(id) {
    const popover = document.querySelector(`#${id}`);
    if (popover) {
      popover.remove();
    }
  }

  getRandomInt() {
    return Math.floor(1000 + Math.random() * 99999);
  }
}
