export const $dom = {
  html : document.querySelector('html'),
  body : document.querySelector('body'),
  header : document.querySelector('.l-header'),
  footer : document.querySelector('.l-footer'),
  click_event : ((window.ontouchstart !== null) ? 'click' : 'touchend'),
};

export const mql = window.matchMedia('screen and (min-width: 1024px)');
