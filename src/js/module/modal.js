/* ----------------------------------------
// Modal
---------------------------------------- */

/*  ``````````````````````````````

    <a href="" data-modal="{#ID}" class="js-modal-open">開くボタン</a>

    <div class="hide">

      <div class="{#ID}">
        <div class="inner">
          <p>TEST</p>
          <a class="js-modal-close">CLOSE</a>
        </div>
      </div>

    </div>
    
    ``````````````````````````````  */

let current_modal;
let m_close_callback;
const $m_toggle_open = document.querySelectorAll('.js-modal-open');
const $m_toggle_close = document.querySelectorAll('.js-modal-close');
const $m_modal = document.querySelector('.modal');
const $m_wrap = document.querySelector('.modal-wrap');
const $m_container = document.querySelector('.modal-container');

$m_container.addEventListener('transitionend', () => {
  if(m_close_callback) {
    m_close_callback();
    $m_wrap.style.display = 'none';
    m_close_callback = '';
  }
})

// オープントグル
$m_toggle_open.forEach((obj, i) => {
  obj.addEventListener('click', () => {
    const target = obj.getAttribute('data-modal');
    modal_open(target);
    return false;
  }, false);
});

// クローズトグル
const closeBtnEnable = () => {
  $m_toggle_close.forEach((obj, i) => {
    obj.addEventListener('click', modal_close, false);
  });
}


// モーダルオープン
const modal_open = (modal_name) => {
  $html.classList.add('modal_open');
  $m_wrap.style.display = 'flex';

  const $current_modal = document.querySelector('.' + modal_name);
  const $new_modal = $current_modal.cloneNode(true);
  const $new_modal_toggle = $new_modal.querySelectorAll('.js-modal-close');
  $new_modal_toggle.forEach((obj, i) => {
    obj.addEventListener('click', modal_close, false);
  });
  $m_container.textContent = '';
  $m_container.appendChild($new_modal);

  ol_open(() => {
    $m_wrap.classList.add('open');
  });
}

// モーダルクローズ
const modal_close = () => {
  m_close_callback = ol_close;
  $m_wrap.classList.remove('open');
}