// /* --------------------
// Navigation
// -------------------- */

/*  ``````````````````````````````

  <!-- トグル -->
  <div class="menu-trigger">
    <span class="js-menu-trigger">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>

  <!-- メニュー -->
  <nav class="l-header_gnavi gnavi js-globalnav">
    <ul class="gnavi-menu">
      <li class="gnavi-menu_item"><a href="#">MENU01</a></li>
    </ul>
  </nav>

``````````````````````````````  */

const $menus = document.querySelector('.js-globalnav');
const $toggle = document.querySelector('.js-menu-trigger');

const setNav = () => {
  toggleSet();
}

const destNav = () => {
  $toggle.removeEventListener('click', openNav);
  $menus.classList.remove('open');
  $toggle.parentNode.classList.remove('active', 'active--back');
  unlockScreen();
}

const openNav = () => {
  $menus.classList.add('open');
  lockScreen();
  toggleSetClose();
}

const closeNav = () => {
  $menus.classList.remove('open');
  unlockScreen();
  toggleSet();
}

const toggleSet = () => {
  console.log('HOHOHOH')

  $toggle.removeEventListener('click', closeNav);
  $toggle.parentNode.classList.remove('active', 'active--back');
  $toggle.addEventListener('click', openNav);
}

const toggleSetClose = () => {
  $toggle.removeEventListener('click', openNav);
  $toggle.parentNode.classList.add('active')
  $toggle.parentNode.classList.remove('active--back');
  $toggle.addEventListener('click', closeNav);
}
