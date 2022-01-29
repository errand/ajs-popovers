import Popover from './Popover';

const popoverTriggerList = [...document.querySelectorAll('[data-ajs-toggle="popover"]')];

for (let popover of popoverTriggerList) {
  new Popover(popover)
}
console.log(popoverTriggerList)
