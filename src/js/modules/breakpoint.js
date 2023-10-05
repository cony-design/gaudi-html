// /* --------------------
// Breakpoint
// -------------------- */

import { mql } from "../param";
import { setNav, destNav } from './nav_ctrl.js';

let device_is;

export const checkBreakPoint = (mql) => {
  //モバイル向け
  if (!mql.matches) {
    setNav();

    device_is = 'MOBILE';
  }
  //デスクトップ向け
  else {
    destNav();

    device_is = 'DESKTOP';
  }
}

mql.addListener(checkBreakPoint);