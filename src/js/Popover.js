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
    if(el.getAttribute('aria-describedby')) {
      const id = el.getAttribute('aria-describedby');
      el.removeAttribute('aria-describedby');
      this.removePopover(id);
    } else {
      const id = `ajs-${this.getRandomInt()}`;
      el.setAttribute('aria-describedby', id);
      this.createPopover(id, el.dataset.ajsTitle, el.dataset.ajsContent, el.dataset.ajsPosition)
    }
  }

  createPopover(id, title, content, position = 'top') {
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

    this.movePopover();
    window.addEventListener('scroll', (e) => this.movePopover());
  }


  movePopover() {
    let popover = document.querySelector('.popover')
    if (popover) {
      let target = popover.previousSibling;
      let targetPosition = target.getBoundingClientRect();

      switch (target.dataset.position) {
        case ('top'):
          popover.style.top = targetPosition.top - targetPosition.height - 10 + 'px';
          popover.style.left = targetPosition.x + targetPosition.width / 2 + 'px';
          popover.style.transform = 'translateX(-50%)';
          break;

        case ('bottom'):
          popover.style.top = targetPosition.top + targetPosition.height + 'px';
          popover.style.left = targetPosition.x + targetPosition.width / 2 + 'px';
          popover.style.transform = 'translateX(-50%)';
          break;

        case ('left'):
          popover.style.top = targetPosition.top - 5 + 'px';
          popover.style.left = targetPosition.x + 'px';
          popover.style.transform = 'translateX(-100%)';
          break;

        case ('right'):
          popover.style.top = targetPosition.top - 5 + 'px';
          popover.style.left = targetPosition.x + targetPosition.width + 'px';
          break;

        default:
          popover.style.top = targetPosition.top + targetPosition.height + 'px';
          popover.style.left = targetPosition.x + (targetPosition.width / 2) + 'px';
          popover.style.transform = 'translateX(-50%)';
          break;
      }
    }
  }

  removePopover() {
    const popover = document.querySelector('.popover');
    if (popover) {
      popover.remove();
      window.removeEventListener('scroll', (e) => this.movePopover());
    }
  }

  getRandomInt() {
    return  Math.floor(1000 + Math.random() * 99999);
  }
}
