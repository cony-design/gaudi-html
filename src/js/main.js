import { mql } from './param.js';
import { inview } from './modules/inview.js';
import { setTopToggle } from './modules/spy.js';
import { checkBreakPoint } from './modules/breakpoint.js';
import accordion from './modules/accordion.js';
import modal from './modules/modal.js';
import slider from './modules/slider.js';

accordion();
checkBreakPoint(mql);
modal();
slider();

window.addEventListener('scroll', () => {
  setTopToggle();
  inview();
});