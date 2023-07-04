/* ----------------------------------------
// Overlay
---------------------------------------- */

let ol_callback = '';
const $ol = document.createElement('div');
$ol.className = 'overlay';

$ol.addEventListener('animationend', () => {
  if(ol_callback) ol_callback();
});

$body.appendChild($ol);

const ol_open = (fn) => {
  ol_callback = fn;
  lockScreen();
  $ol.classList.add('is_show');
}

function ol_close(callback) {
  $html.classList.remove('modal_open');
  $ol.classList.remove('is_show');
  unlockScreen();
}