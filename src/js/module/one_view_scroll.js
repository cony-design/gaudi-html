// /* --------------------
// One View Scroll
// -------------------- */

/*  ``````````````````````````````

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>

    <!-- スライダー -->
    <div class="swiper-oneview">

      <!-- slide -->
      <div class="swiper-wrapper">
        <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/800/?random);"></span></div>
        <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/840/?random);"></span></div>
        <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/900/?random);"></span></div>
      </div>

      <!-- pagination -->
      <div class="swiper-pagination"></div>

      <!-- scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
``````````````````````````````  */

var oneview_swiper = new Swiper(".swiper-oneview", {
  direction: "vertical",
  autoHeight: true,
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});