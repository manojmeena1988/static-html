$(document).ready(function() {
    $('.tab-slide-section').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll:1,
        dots: true,
        infinite: false,
        arrows: false,
        // customPaging : function(slider, i) {
        //     var thumb = $(slider.$slides[i]).data();
        //     const number = i++;
        //     return '<a class="dot">'+number+'</a>';
        //             },
      });
});