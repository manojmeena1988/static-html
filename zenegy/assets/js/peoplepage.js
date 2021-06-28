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
});