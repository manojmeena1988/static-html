$(document).ready(function(){    
    $('.application-items').slick({
      dots: true,
      infinite: true,
      speed: 300,
      variableWidth: true,
      slidesToShow:1,
      slidesToScroll:1,
      responsive: [  
      // {
      //     breakpoint: 1441,
      //     settings: {
      //     slidesToShow:3,
      //   }
      // },          
      // {
      //   breakpoint: 1025,
      //   settings: {
      //     slidesToShow:1,
      //   }
      // },
      // {
      //   breakpoint:769,
      //   settings: {
      //     slidesToShow:1,
      //   }
      // },
      
      // {
      //   breakpoint: 481,
      //   settings: {
      //     slidesToShow:1,
      //   }
      // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }); 
    
});


