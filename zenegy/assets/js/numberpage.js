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
        $('#dimension-slide , #chart-workflow ,#customer-banks').slick({
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

    });