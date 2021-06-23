var inputNum = document.querySelector("#phone-number");

    window.intlTelInput(inputNum , {
        hiddenInput: "full",
        separateDialCode: true,
        preferredCountries: ["dk"],
        utilsScript: "assets/lib/intl/js/utils.js",
     });   