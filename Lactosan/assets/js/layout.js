$(document).ready(function(){

    $(".filter-tab").on("click", function() {
        $("body").toggleClass("panel-active");
    });
    $("body ").on("click", ".offcanvas-overlay , .close-filter", function() {
        $("body").removeClass("panel-active");
    });

    $(".mobile-menu").on("click", function() {
        $("body").toggleClass("menu-active");
    });


    $('.sub-menu ul').hide();
        $(".sub-menu a").click(function () {
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
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
});


