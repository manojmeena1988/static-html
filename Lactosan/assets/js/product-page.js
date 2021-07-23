$(document).ready(function() {
    //   if (window.matchMedia("(max-width:767px)").matches) {
        $('.iceaCream-product').slick({
            responsive: [
              {
                breakpoint:768,
                settings: {
                  slidesToShow:1.1,
                  slidesToScroll:1,
                  infinite: false,
                  dots: false
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
    //   }
});