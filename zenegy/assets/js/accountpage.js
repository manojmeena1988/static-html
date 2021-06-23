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