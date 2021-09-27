$(document).ready(function() {
    $(".basic-price .show-details").click(function(){
        $("#basic-box").slideToggle();
        $(".basic-price .show-details i").toggleClass("fa-chevron-up fa-chevron-down");
        var inoText = $(this).find("p");
        if(inoText.text() === "Skjul detaljer"){
            inoText.text("Se detaljer");
        }
        else{
            inoText.text("Skjul detaljer");
        }
    });
    $(".standard-price .show-details").click(function(){
        $("#standard-box").slideToggle();
        $(".standard-price .show-details i").toggleClass("fa-chevron-up fa-chevron-down");
        var inoText = $(this).find("p");
        if(inoText.text() === "Skjul detaljer"){
            inoText.text("Se detaljer");
        }
        else{
            inoText.text("Skjul detaljer");
        }
    });
    $(".premium-price .show-details").click(function(){
        $("#premium-box").slideToggle();
        $(".premium-price .show-details i").toggleClass("fa-chevron-up fa-chevron-down");
        var inoText = $(this).find("p");
        if(inoText.text() === "Skjul detaljer"){
            inoText.text("Se detaljer");
        }
        else{
            inoText.text("Skjul detaljer");
        }
    });
});