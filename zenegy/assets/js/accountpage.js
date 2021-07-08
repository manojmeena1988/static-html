$(document).ready(function () {
var inputNum = document.querySelector("#phone-acc");

window.intlTelInput(inputNum, {
    hiddenInput: "full",
    separateDialCode: true,
    preferredCountries: ["dk"],
    utilsScript: "assets/lib/intl/js/utils.js",
});


// form focus js start
$(".account-focus").focusin(function(){
    $(this).css("border-bottom" , "1px solid #979797");
  });
  $(".account-focus").focusout(function(){
    $(this).css("border-bottom" , "1px solid rgba(255, 255, 255, 0.3)");
  });


     // slide in mobile 

     if (window.matchMedia("(max-width:599px)").matches) {
      $('#report-communication , #better-service-slide , #footer-uper-card').slick({
        responsive: [
          {
            breakpoint:599,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              infinite: true,
              dots: true,
              prevArrow: false,
              nextArrow: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }

});