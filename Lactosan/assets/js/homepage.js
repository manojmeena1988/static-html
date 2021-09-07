$(document).ready(function() {
    //   if (window.matchMedia("(max-width:767px)").matches) {
        $('.iceaCream-product , .news-boxs').slick({
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

    $('.step-circle li').click(function(){
      var tab_id = $(this).data('tab');
      console.log(tab_id)
      $('.step-circle li').removeClass('current');
      $('.tabs-section').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

    // Home page show max 5 news cards js ===============================

  $(".lastNew-d").hide();
  $(".seeMore-news").click(function(){
      $(".lastNew-d").show("slow");
      $(this).hide();
  });
});