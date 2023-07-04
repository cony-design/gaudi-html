// /* --------------------
// LockScreen
// -------------------- */

let scrollPosition;

const lockScreen = () => {
  scrollPosition = window.pageYOffset;
  $body.classList.add('fixed');
  $body.style.top = -scrollPosition + "px";
}

const unlockScreen = () => {
  $body.classList.remove('fixed');
  $body.style.top = "";
  window.scroll({
    top: scrollPosition,
    behavior: "instant",
  });
}
