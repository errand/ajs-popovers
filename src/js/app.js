import Popover from './Popover';

const popoverTriggerList = [...document.querySelectorAll('[data-ajs-toggle="popover"]')];

popoverTriggerList.forEach(popover => new Popover(popover));
