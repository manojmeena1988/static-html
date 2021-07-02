$(document).ready(function () {

var input = document.querySelector("#phone-c");
window.intlTelInput(input, {
   hiddenInput: "full",
   separateDialCode: true,
   preferredCountries: ["dk"],
    utilsScript: "assets/lib/intl/js/utils.js",
  });

  // form focus js start
    $(".expense-focus").focusin(function(){
      $(this).css("border-bottom" , "1px solid #a358d0");
    });
    $(".expense-focus").focusout(function(){
      $(this).css("border-bottom" , "1px solid rgba(255, 255, 255, 0.3)");
    });


       // slide in mobile 

    if (window.matchMedia("(max-width:599px)").matches) {
      $('#client-app').slick({
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

    // $('.expense-parallax-window').parallax({imageSrc: 'assets/images/expense-why-footer@1x.jpg'});

  }); 