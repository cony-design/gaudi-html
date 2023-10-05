// /* --------------------
// LockScreen
// -------------------- */
import { $dom } from "../param.js";

let scrollPosition;

export const lockScreen = () => {
  scrollPosition = window.pageYOffset;
  $dom.body.classList.add('fixed');
  $dom.body.style.top = -scrollPosition + "px";
}

export const unlockScreen = () => {
  $dom.body.classList.remove('fixed');
  $dom.body.style.top = "";
  window.scroll({
    top: scrollPosition,
    behavior: "instant",
  });
}
