let $html;
let $body;
let $header;
let $footer;
let click_event;

const getOffsetTop = ($el) => {
  const rect = $el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

window.addEventListener('DOMContentLoaded', (event) => {
  $html = document.querySelector('html');
  $body = document.querySelector('body');
  $header = document.querySelector('.l-header');
  $footer = document.querySelector('.l-footer');
  click_event = ((window.ontouchstart !== null) ? 'click' : 'touchend');
