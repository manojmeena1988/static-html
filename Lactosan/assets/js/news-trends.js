$(document).ready(function() {
    //   if (window.matchMedia("(max-width:767px)").matches) {
    //     $('.news-cat-1').slick({
    //         responsive: [
    //           {
    //             breakpoint:768,
    //             settings: {
    //               slidesToShow:1.1,
    //               slidesToScroll:1,
    //               infinite: false,
    //               dots: false
    //             }
    //           }
    //           // You can unslick at a given breakpoint now by adding:
    //           // settings: "unslick"
    //           // instead of a settings object
    //         ]
    //       });
    //   }
    $("#treadBtn").click(function(){
        $("#newsform").hide(300);
        $(".latest-news h3").text("Lorem ipsome dolor sit amet,  consectetur");
      });
});