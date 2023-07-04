// /* --------------------
// Breakpoint
// -------------------- */

let device_is;

const checkBreakPoint = (mql) => {
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
