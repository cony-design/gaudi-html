// /* --------------------
// modal
// -------------------- */
import { lockScreen, unlockScreen } from "./lock_screen.js";

const modal = () => {
  const $modal = document.querySelector(".js-modal");
  const $openTrigger = document.querySelector(".js-modal_open");
  const $closeTrigger = document.querySelector(".js-modal_close");

  $openTrigger.addEventListener("click", async () => {
    $modal.removeAttribute("style");
    lockScreen();
    $modal.showModal();
  });

  $closeTrigger.addEventListener("click", () => {
    $modal.close();
    unlockScreen();
  });

  $modal.addEventListener("cancel", () => {
    $modal.close();
    unlockScreen();
  });

  $modal.addEventListener('click', (event) => {
    if(event.target.closest('.modal_inner') === null) {
      $modal.close();
      unlockScreen();
    }
  });

  $modal.addEventListener("close", async (e) => {
    await waitDialogAnimation(e.target);
    $modal.style.display = "none";
  })

  const waitDialogAnimation = (dialog) => Promise.allSettled(
    Array.from(dialog.getAnimations()).map(animation => animation.finished)
  );
}

export default modal;

