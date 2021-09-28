
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
  
// mobile menu box close when menu scroll click js =================================  
  $(".mobile-panel .mobile-menuList li a ").on("click", function() {
    $("body").toggleClass("mobile-box-active");
 });

 
// tooltip box js start===============================================

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


//same page menu scroll js ====================================== 
$(document).on('click', 'a[href^="#"][class="scrollbtm"]', function (event) {
  event.preventDefault();
  window.location.hash = $(this).attr("href");
  var headHeight = $(".main-header").outerHeight();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - headHeight
  },400);
});