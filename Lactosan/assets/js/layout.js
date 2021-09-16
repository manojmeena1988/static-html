
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

    $(".sub-menu .thornic-menu").click(function () {
      $(this).parent(".sub-menu").toggleClass('ftr').children("ul").slideToggle("100");
      $(this).find(".right").toggleClass("fa-chevron-up fa-chevron-down");
    });
    // footer menu dropdown end ==============================
    $(".sub-menu .openToggle-m").click(function () {
        const opend = $(this).closest(".sub-menu").hasClass('ftr');
        $(".sub-menu").removeClass('ftr').children("ul").slideUp("100");
        $(".right").removeClass("fa-chevron-up ");
        if(!opend){
          $(this).closest(".sub-menu").addClass('ftr').children("ul").slideDown("100");
          $(this).addClass("fa-chevron-up ");
        }
    });

    $(".sub-menu .inner-title-l").click(function () {
      const opend = $(this).parent(".sub-menu.product-submenu-list").hasClass('ftr');
      $(".sub-menu.product-submenu-list").removeClass('ftr').children("ul").slideUp("100");
      $(".right-inner").removeClass("fa-chevron-up ");
      if(!opend){
        $(this).parent(".sub-menu.product-submenu-list").addClass('ftr').children("ul").slideDown("100");
        $(this).find(".right-inner").addClass("fa-chevron-up ");
      }
  });

    // footer select and mobile js start 

    $('#multi-1 , #multi-mob , #multi-application').multiselect({
        // selectAllText: true
        nonSelectedText: "Choose an application area",
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
      $('#getForm').validate({
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

    // multiselect  selector nice scroll js start===========================
    $(".multiselect-container").niceScroll({cursorcolor:"#ddd",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true ,cursoropacitymin:0.5,});


    //filter box nice scroll js start =====================================
    $(".filter-box").niceScroll({cursorcolor:"#ddd",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true ,cursoropacitymin:0.5,});


// language text change js =====================================
    $(".language-item ul li a").click(function(){
        var txt = $(this).text();
        $(".language-item button").text(txt);
    });


    // join page button hover text change=======================
 
   $(".joinNow-t").mouseenter(function(){
      $(this).text("Read more");
   }); 
   $(".joinNow-t").mouseleave(function(){
    $(this).text("Join now");
   }); 


  


  // menu scroll js start==============================================

  // $(".scrollTo").click(function() {
    // var tar = $(this).data("id");
    // console.log(window.location.pathname.split('#'))
    // $('html, body').animate({
    //     scrollTop: $("#" + tar + "").offset().top - 120
    // }, 200);
  // });

});

