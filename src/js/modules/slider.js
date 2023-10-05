// /* --------------------
// Slider
// -------------------- */

/*  ``````````````````````````````

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>

    <!-- スライダー -->
    <div class="swiper-container">

      <!-- slide -->
      <div class="swiper-wrapper">
        <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/800/?random);"></span></div>
        <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/840/?random);"></span></div>
        <div class="swiper-slide"><span class="fig" style="background-image: url(https://picsum.photos/1900/900/?random);"></span></div>
      </div>

      <!-- pagination -->
      <div class="swiper-pagination"></div>

      <!-- navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    ``````````````````````````````  */

const slider = () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal', // vertical : horizontal
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}

export default slider;