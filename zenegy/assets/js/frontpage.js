$(document).ready(function () {

    // teamblue slider 
    $(".right-slider-teamblue").slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.left-teamblue'
    });
    $(".left-teamblue").slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // vertical: true,
        asNavFor: '.right-slider-teamblue',
    });

    $(window).on('load', function (){
    $(".product-slider").owlCarousel({
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass:true,
        responsive: {
            0: {
                items: 2,

            },
            570: {
                items: 4,

            },
            992: {
                items: 6,

            },
            1200: {
                items: 8,

            }
        }
    });
  });


    // logo slider 

    // $('.product-slider').slick({
    //   dots: false,
    //   infinite: true,
    //   speed:3000,
    //   slidesToShow: 8,
    //   slidesToScroll:1,
    //   autoplay: true,
    //   autoplaySpeed:0,
    //   arrows: false,
    //   cssEase: 'linear',
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });
    

    const element = document.getElementById("image-compare");
    const options = {
        addCircle: true,
        controlColor: "#1f2227",
    }
    const viewer = new ImageCompare(element, options).mount();



    // newslatter show hide js start

    $("#sub-now").click(function(){
        $(".newsletter-confirm-state").show();
        $(".newsletter-content").hide();
      });
    
      
     // footer country list
     var inputNum_ftr = document.querySelector("#ftr-list");

     window.intlTelInput(inputNum_ftr , {
         hiddenInput: "full",
         separateDialCode: true,
         initialCountry: 'dk',
         utilsScript: "assets/lib/intl/js/utils.js",
      });  

     AOS.init({disable: 'mobile'});

       // slide in mobile 
   
    if (window.matchMedia("(max-width:599px)").matches) {
        $('#mob-app , #doc-management , #comlete-over , #digital-salary-slide , #get-expense-management , #every-one-place , #automate-workflow , #business-suit-slide , #danske-bank-slide , #footer-uper-card').slick({
          responsive: [
            {
              breakpoint:599,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      }

        // form focus js start
    $(".number-focus").focusin(function(){
      $(this).css("border-bottom" , "1px solid #00aaff");
    });
    $(".number-focus").focusout(function(){
      $(this).css("border-bottom" , "1px solid rgba(255, 255, 255, 0.3)");
    });

});

