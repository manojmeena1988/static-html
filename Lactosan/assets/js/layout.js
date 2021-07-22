$(document).ready(function(){

    $(".filter-tab").on("click", function() {
        $("body").toggleClass("panel-active");
        // $(".filter-box").fadeIn("fast");
    });
    $("body ").on("click", ".offcanvas-overlay , .close-filter", function() {
        $("body").removeClass("panel-active");
        // $(".filter-box").fadeOut("fast");
    });

    $(".mobile-menu").on("click", function() {
        $("body").toggleClass("menu-active");
        // $(".filter-box").fadeIn("fast");
    });




    // $(".application-items").select2({
    //     tags: true,
    //     tokenSeparators: [',', ' ']
    // })

    $('.sub-menu ul').hide();
        $(".sub-menu a").click(function () {
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa-chevron-up fa-chevron-down");
    });

});


