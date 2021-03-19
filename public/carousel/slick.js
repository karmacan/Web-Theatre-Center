$('.cardboard').slick({
  arrows: false,
  dots: true,

  slidesToShow: 3,
  centerMode: true, /* show showing neighbours */

  focusOnSelect: true, /* change current on click */
  swipeToSlide: true, /* change current on scroll */

  infinite: false,

  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 620/*max px*/,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});