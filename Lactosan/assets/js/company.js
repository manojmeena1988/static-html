$(document).ready(function() {
  $('.yearly-slider').slick({
      dots:false,
      infinite:true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll:1,
      variableWidth: true,
      appendArrows: $('.news__arrows'),
      prevArrow: '<button class="slick-prev slick-arrow"></button>',
      nextArrow: '<button class="slick-next slick-arrow"></button>',
      responsive: [
      {
          breakpoint: 1441,
          settings: {
          slidesToShow:1,
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

    // Company slick slider on scroll changes =============================

    function changeYear(){
      var year =  $(".slick-active .year-item").text();
      $('.btm-year-tag').text(year);
    }
    changeYear();

    $(".yearly-slider").on("afterChange", function (){
      changeYear()
  })

});
