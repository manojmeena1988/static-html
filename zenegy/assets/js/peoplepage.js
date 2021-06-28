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
    $(window).scroll(function () {
        var pos = $(".automated-section").offset().top;
        var scroll = $(window).scrollTop() - pos;
        $(".icon-list").css({
          transform:
            "translate3d(-50%, -" + scroll / 100 + "%, 0) scale(" + (100 - scroll / 20) / 100 + ")",
        });              
    });
});