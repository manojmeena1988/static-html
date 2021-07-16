$(document).ready(function(){

    $(".filter-tab").on("click", function() {
        $("body").toggleClass("panel-active");
        $(".filter-box").fadeIn("fast");
    });

    $("body ").on("click", ".offcanvas-overlay , .close-filter", function() {
        $("body").removeClass("panel-active");
        $(".filter-box").fadeOut("fast");
    });

    // $(".filter-tab").click(function(){
    //     $(".filter-box").show();
    //   });
    //   $(".close-filter").click(function(){
    //     $(".filter-box").hide();
    //   });



});


