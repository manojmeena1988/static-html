$(document).ready(function() {
        $('.yearly-slider').slick({
            dots:false,
            infinite: false,
            slidesToShow:3.5,
            slidesToScroll:1,
            arrows: true,
            appendArrows: $('.news__arrows'),
            prevArrow: '<button class="slick-prev slick-arrow"></button>',
            nextArrow: '<button class="slick-next slick-arrow"></button>',
            responsive: [
            {
                breakpoint: 1441,
                settings: {
                slidesToShow:3.2,
                slidesToScroll:0.6,
                 }
               },          
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow:3,
                  slidesToScroll:1,
                }
              },
              {
                breakpoint:769,
                settings: {
                  slidesToShow:2.8,
                  slidesToScroll:1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow:2.5,
                  slidesToScroll:1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow:2.8,
                  slidesToScroll: 1,
                  
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
});
