$(document).ready(function () {
var inputNum = document.querySelector("#phone-number");

    window.intlTelInput(inputNum , {
        hiddenInput: "full",
        separateDialCode: true,
        preferredCountries: ["dk"],
        utilsScript: "assets/lib/intl/js/utils.js",
     });   


       // slide in mobile 

    if (window.matchMedia("(max-width:599px)").matches) {
        $('#dimension-slide , #chart-workflow ,#customer-banks , #footer-uper-card').slick({
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