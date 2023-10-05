// /* --------------------
// Spy
// -------------------- */

/*  ``````````````````````````````

  <div class="spy">
    <a href="#" class="spy_obj js-spy_obj store">spy</a>
  </div>

  ``````````````````````````````  */
import { $dom } from '../param.js';

const $el_spy = document.querySelector('.js-spy_obj');
let header_h;
let footer_h;

// 現れるタイミング
export const setTopToggle = function() {
  const scrl_t = document.documentElement.scrollTop || document.body.scrollTop;
  header_h = $dom.header.offsetHeight;
  footer_h = $dom.footer.offsetHeight;
  
  // ページ最上部かどうか
  if (scrl_t < 100) {
      hideTopToggle();

  // ページ最下部かどうか
  } else {
    const scrollHeight = document.body.clientHeight;
    const scrollPosition = window.innerHeight + scrl_t;
    const footHeight = $dom.footer.offsetHeight - $el_spy.offsetHeight;

    if (scrollHeight - scrollPosition <= footHeight) {
      storeTopToggle();
    } else {
      showTopToggle();
    }
  };
}

// スクロールトップ
const hideTopToggle = function() {
  $el_spy.classList.add('spy_hide');
  $dom.header.classList.remove('min');
}

// スクロールボトム
const storeTopToggle = function() {
  $el_spy.classList.add('store');
}

// スクロール中
const showTopToggle = function() {
  $el_spy.classList.remove('store');
  $el_spy.classList.remove('spy_hide');
  $dom.header.classList.add('min');
}
