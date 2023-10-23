// /* --------------------
// Inview
// -------------------- */

/*  ``````````````````````````````

  <!-- 単体 -->
  <div class="fadein">フェード</div>

  <!-- 連続 -->
  <ul class="fadein_order">
    <li>フェード1</li>
    <li>フェード2</li>
    <li>フェード3</li>
  </ul>

``````````````````````````````  */

import { getOffsetTop, scrollTop } from "../param.js";

export const inview = () => {
  const windowHeight = window.innerHeight;

  // 個別フェードイン
  let $fade_obj = document.querySelectorAll('.fadein');

  $fade_obj.forEach((obj, i) => {
    const elemPos = getOffsetTop(obj);
    const delay = 200;

    if (scrollTop > elemPos - windowHeight + delay) {
      obj.classList.add('scrollin');
    }
  });


  // グループフェードイン

  let $fade_array = document.querySelectorAll('.fadein_order');

  $fade_array.forEach((obj, i) => {
    const elemPos = getOffsetTop(obj);
    const delay = 200;

    if (scrollTop > elemPos - windowHeight + delay) {
      Array.from(obj.children).forEach((el, i) => {
        setTimeout(function () {
          el.classList.add('scrollin');
        }, 200 * i);
      });
    }
  });
}

