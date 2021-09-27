
$(document).ready(function(){
  $(function () {
    $("[data-bs-toggle='tooltip']").tooltip();
  });
  // form validations start ===========================
    $('#signupForm').validate({
      messages: {
        firstName: "Påkrævet felt",
        lastName: "Påkrævet felt",
        cEmail: "Påkrævet felt",
        phoneNumber: "Påkrævet felt",
        numberofEmployees: "Påkrævet felt"
        ,land: "Påkrævet felt"
      },
        // errorPlacement: function(error,element) {
        //   return true;
        // },
        submitHandler: function(form) {
            console.log('Submitted')
          }
      });
      // mobile menu toggle js start =================================
   $(".mobile-menu").on("click", function() {
    $("body").toggleClass("mobile-box-active");
  }); 


  $(document).click(function(event) { 
    var $target = $(event.target);
    if(!$target.closest('.info-i').length && 
      $('.tooltip-box').is(":visible")) {
        $(".tooltip-box").fadeOut();
    }        
  });

  $(".info-i").on("click" , function(){
    if(!$(this).find(".tooltip-box").is(":visible")){
      $(".info-i").each(function(index , value){
        $(value).find(".tooltip-box").fadeOut();
      });
    }
    $(this).find(".tooltip-box").fadeToggle();
  }); 
});

