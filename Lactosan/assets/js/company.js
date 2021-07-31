$(document).ready(function() {
  $('.yearly-slider').slick({
      dots:true,
      infinite:true,
      // speed: 500,
      // fade: true,
      // slide: '> div',
      cssEase: 'linear',
      slidesToShow:2,
      slidesToScroll:1,
      
      // arrows: true,
      appendArrows: $('.news__arrows'),
      prevArrow: '<button class="slick-prev slick-arrow"></button>',
      nextArrow: '<button class="slick-next slick-arrow"></button>',
      responsive: [
      {
          breakpoint: 1441,
          settings: {
          slidesToShow:2,
          slidesToScroll:1,
            }
          },
        {
          breakpoint:769,
          settings: {
            slidesToShow:1,
            slidesToScroll:1,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
