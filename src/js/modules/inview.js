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

export const inview = () => {
  const options = {
    rootMargin: '-200px 0px'
  }

  /* Fadein ------------------------------ */
  const fadein = (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('scrollin');
      } else {
      }
    });
  }
  const o_f = new IntersectionObserver(fadein, options);

  const $_el_f = document.querySelectorAll('.fadein');

  $_el_f.forEach(object => {
    o_f.observe(object);
  });

  /* FadeinOrder ------------------------- */
  const fadein_order = (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach((el, i) => {

          setTimeout(function () {
            el.classList.add('scrollin');
          }, 200 * i);
        });
      } else {
      }
    });
  }
  const o_fo = new IntersectionObserver(fadein_order, options);

  const $_el_fo = document.querySelectorAll('.fadein_order');

  $_el_fo.forEach(object => {
    o_fo.observe(object);
  });

  /* inview ------------------------- */
  const inview = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scrollin');
      } else {
      }
    });
  }
  const o_iv = new IntersectionObserver(inview, options);

  const $_el_iv = document.querySelectorAll('.fadein_order');

  $_el_iv.forEach(object => {
    o_iv.observe(object);
  });
}

