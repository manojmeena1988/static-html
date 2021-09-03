
$(document).ready(function(){

    $(".filter-tab").on("click", function() {
        $("body").toggleClass("panel-active");
    });
    $("body ").on("click", ".offcanvas-overlay , .close-filter, .save-button", function() {
        $("body").removeClass("panel-active");
    });

    $(".mobile-menu").on("click", function() {
        $("body").toggleClass("menu-active");
    });


    // mobile and footer nav menu slide ==============================

    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function () {
        $(this).parent(".sub-menu").toggleClass('ftr').children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa-chevron-up fa-chevron-down");
    });

    // footer select and mobile js start 

    $('#multi-1 , #multi-mob , #multi-application').multiselect({
        // selectAllText: true
    });


    $(".multiselect").on("click", function() {
        $(".multiselect-container").slideToggle();
    });

    $(document).click(function(event) { 
        var $target = $(event.target);
        if(!$target.closest('.multiselect').length && 
        $('.multiselect-container').is(":visible")) {
            $(".multiselect-container").slideUp();
        }        
      });

    $(".multiselect-selected-text").html("Choose an application area");


    // Validate js start=====================================

    $('#newsForm').validate({
        errorPlacement: function(error,element) {
          return true;
        },
        submitHandler: function(form) {
            console.log('Submitted')
          }
      });
      
      $('#mobNewform').validate({
        errorPlacement: function(error,element) {
          return true;
        },
        submitHandler: function(form) {
            console.log('Submitted')
        }
      });
      $('#loginForm').validate({
        errorPlacement: function(error,element) {
          return true;
        },
        submitHandler: function(form) {
            console.log('Submitted')
        }
      });

    // +++++++++++++ For applciation page js for showing divs
    $('.inner-fam .btn-warning').click(function(){
        $('.inner-fam').fadeOut('fast')
        $('.inner-fam-2').fadeIn('slow')
    })


    // ===================== nav cheese powder js
    $(".inner-box.bg-clr").click(function(){
      if( $(this).parents('.menu-row').hasClass('cheese-d') ){
        window.location.href='product-cheese-powder.html';
      }
      $('.cheeseText').toggle(); 
      $('.menu-row').addClass('cheese-d');
    });


    //why cheese box open js start======================
    $(".inner-box span , .innerGrid span , .devlepmentBox span , .popUpbox span ").click(function(){
      $(this).parents('.endProject').find('.drop-box').fadeToggle('active , 2000')
      $(this).toggleClass('active');
    });
});


