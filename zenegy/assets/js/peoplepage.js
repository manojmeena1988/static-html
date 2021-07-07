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

    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('.icon-list');
    ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
    });

    // $(window).scroll(function () {
    //     var pos = $(".automated-section").offset().top;
    //     var scroll = $(window).scrollTop() - pos;
    //     $(".icon-list").css({
    //         transform:
    //             "translate3d(-50%, -" + scroll / 100 + "%, 0) scale(" + (100 - scroll / 20) / 100 + ")",
    //     });
    // });

    if (window.matchMedia("(max-width:599px)").matches) {
        $('#security-slide , #save-time-slide ,#payroll-exp-slide').slick({
          responsive: [
            {
              breakpoint:599,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true,
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
});