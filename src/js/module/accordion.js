// /* --------------------
// Accordion
// -------------------- */

// アコーディオン取得
const $accordions = document.querySelectorAll('.js-accordion');

// 高さの配列格納用
let menuHeight = [];

$accordions.forEach((accordion, i) => {

  let menus = accordion.querySelectorAll('.accordion_toggle');
  menuHeight[i] = [];

  menus.forEach((menu, j) => {
    // 開閉用の要素の取得
    let item = menu.nextElementSibling;
    // 高さ取得
    menuHeight[i].push(item.clientHeight);

    menu.addEventListener('click', ()=>{
      //スタイル属性があったら削除
      //なければ閉じている状態なのでheight付与
      item.getAttribute('style') ? item.removeAttribute('style') : item.setAttribute('style', `height: ${menuHeight[i][j]}px`)
    })
  })

  //アコーディオンの開閉する要素のheightを0にするクラスを親要素に付与
  accordion.classList.add('close');
})
