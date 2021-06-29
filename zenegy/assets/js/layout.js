$(document).ready(function() {

    $(".btn-menu-toggle").on("click", function() {
        $("body").toggleClass("panel-active");
    });

    $("body").on("click", ".offcanvas-overlay", function() {
        $("body").removeClass("panel-active");
    });

    $(window).scroll(function() {
        var startY = 60;
        var windowY = $(window).scrollTop();
        if ($(".page").hasClass("product-page")) {
            if (windowY > startY) {

                if (!($('.sub-header').hasClass('sticky'))) {
                    $('.sub-header').addClass('sticky');
                }

            } else {

                if ($('.sub-header').hasClass('sticky')) {
                    $('.sub-header').removeClass('sticky');
                }

            }
        } else {

            if (windowY > startY) {

                if (!($('.page-header').hasClass('sticky'))) {
                    $('.page-header')
                        .addClass('sticky')
                        .css('top', -60)
                        .animate({
                            'top': 0
                        }, 300);
                }

            } else {

                if ($('.page-header').hasClass('sticky')) {
                    $('.page-header')
                        .removeClass('sticky')
                        .css('top', 0);
                }

            }
        }

    });

    
    
    //  ================footer accordian js 

    $(".box-ps .footer-title-h").click(function() {

        if (window.innerWidth <= 992) {

            var target = $(this).parents(".box-ps");

            if (target.find(".expend-text").hasClass("acc-active")) {

                target.find("ul").slideUp().removeClass("active");
                target.find(".expend-text").removeClass("acc-active").html('<i class="fas fa-plus"></i>');

            } else {

                $(".footer-links ul.active").slideUp().removeClass("active");
                $(".footer-links .acc-active").removeClass("acc-active").html('<i class="fas fa-plus"></i>');

                target.find("ul").slideDown().addClass("active");
                target.find(".expend-text").addClass("acc-active").html('<i class="fas fa-minus"></i>');
            }
        }
    });


    // =============== people page accordians start
    $(".accordian-box .accordina-target").click(function() {

            var target = $(this).parents(".accordian-box");

            if (target.find(".expend-text").hasClass("acc-active")) {

                target.find(".accordian-content").slideUp().removeClass("active");
                target.find(".expend-text").removeClass("acc-active").html('<i class="fas fa-plus"></i>');

            } else {

                $(".payroll-feature-section .accordian-content.active").slideUp().removeClass("active");
                $(".payroll-feature-section .acc-active").removeClass("acc-active").html('<i class="fas fa-plus"></i>');

                target.find(".accordian-content").slideDown().addClass("active");
                target.find(".expend-text").addClass("acc-active").html('<i class="fas fa-minus"></i>');
            }
    });


    // if (window.innerWidth <= 480) {
    //     document.getElementById("tryFree").innerHTML = "Try";
    // }



    $(".scrollTo").click(function() {
        var tar = $(this).data("id");
        $('html, body').animate({
            scrollTop: $("#" + tar + "").offset().top - 60
        }, 200);
    });


    // // slide in mobile 
   
    // if (window.matchMedia("(max-width:599px)").matches) {
    //     $('#mob-app , #doc-management , #comlete-over , #security-slide , #client-app , #dimension-slide').slick({
    //       responsive: [
    //         {
    //           breakpoint:599,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll:1,
    //             infinite: true,
    //             speed:2000,
    //             dots: true,
    //             prevArrow: false,
    //             nextArrow: false,
    //           }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //       ]
    //     });
    //   }
  
   

});