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
