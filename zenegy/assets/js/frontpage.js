$(document).ready(function () {

    // teamblue slider 
    $(".right-slider-teamblue").slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.left-teamblue'
    });
    $(".left-teamblue").slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // vertical: true,
        asNavFor: '.right-slider-teamblue',
    });

    $(".product-slider").owlCarousel({
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,

            },
            570: {
                items: 4,

            },
            992: {
                items: 6,

            },
            1200: {
                items: 8,

            }
        }
    });
    

    const element = document.getElementById("image-compare");
    const options = {
        addCircle: true,
        controlColor: "#1f2227",
    }
    const viewer = new ImageCompare(element, options).mount();



    // newslatter show hide js start

    $("#sub-now").click(function(){
        $(".newsletter-confirm-state").show();
        $(".newsletter-content").hide();
      });
    
      
     // footer country list
     var inputNum_ftr = document.querySelector("#ftr-list");

     window.intlTelInput(inputNum_ftr , {
         hiddenInput: "full",
         separateDialCode: true,
         initialCountry: 'dk',
         utilsScript: "assets/lib/intl/js/utils.js",
      });  

     AOS.init({disable: 'mobile'});

       // slide in mobile 
   
    if (window.matchMedia("(max-width:599px)").matches) {
        $('#mob-app , #doc-management , #comlete-over').slick({
          responsive: [
            {
              breakpoint:599,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true,
                speed:2000,
                dots: true,
                prevArrow: false,
                nextArrow: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      }

      $('.home-parallax-window').parallax({imageSrc: 'assets/images/frontpage-why-footer@1x.jpg'});

});

