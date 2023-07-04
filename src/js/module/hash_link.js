// /* --------------------
// HashLink
// -------------------- */

/*  ``````````````````````````````

    <!-- ページ内リンク -->
    <a href="#test">リンク</a>

    ``````````````````````````````  */

// リンク取得
let $hash_links = document.querySelectorAll('a[href^="#"]');

$hash_links.forEach((link, i) => {
  const speed = 500;

  link.addEventListener('click', ()=>{
    event.preventDefault();
    const href = link.getAttribute('href');
    const $target = document.querySelector(href == "#" || href == "" ? 'html' : href);
    let margin;

    switch (device_is) {
      case 'DESKTOP':
        margin = 160;
        break;
      default:
        margin = 80;
    }

    const position = getOffsetTop($target) - margin;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  })
})

