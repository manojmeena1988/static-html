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
        $('#dimension-slide').slick({
          responsive: [
            {
              breakpoint:599,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true,
                speed:2000,
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
      
      // $('.numbers-parallax-window').parallax({imageSrc: 'assets/images/numbers-why-footer@1x.jpg'});

    });