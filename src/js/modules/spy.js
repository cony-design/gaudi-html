// /* --------------------
// Spy
// -------------------- */

import { $dom } from '../param.js';

const $el_spy = document.querySelector('.js-spy_obj');

// ヘッダーとフッターの高さを設定
function setHeaderAndFooterHeights() {
  return {
    headerHeight: $dom.header ? $dom.header.offsetHeight : 0,
    footerHeight: $dom.footer ? $dom.footer.offsetHeight : 0,
  };
}

// スパイ要素の表示状態を更新
function updateSpyDisplay(scrollTop) {
  const { headerHeight, footerHeight } = setHeaderAndFooterHeights();
  const scrollHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = scrollTop + windowHeight;
  const footHeight = footerHeight - $el_spy.offsetHeight;

  if (scrollTop < 100) {
    hideSpyElement();
  } else if (scrollHeight - scrollPosition <= footHeight) {
    storeSpyElement();
  } else {
    showSpyElement();
  }
}

// スパイ要素を非表示にする
function hideSpyElement() {
  $el_spy.classList.add('spy_hide');
  if ($dom.header) {
    $dom.header.classList.remove('min');
  }
}

// スパイ要素を保存する
function storeSpyElement() {
  $el_spy.classList.add('store');
}

// スパイ要素を表示する
function showSpyElement() {
  $el_spy.classList.remove('store', 'spy_hide');
  if ($dom.header) {
    $dom.header.classList.add('min');
  }
}

// スクロールイベントハンドラー
export const setTopToggle = function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  updateSpyDisplay(scrollTop);
};
