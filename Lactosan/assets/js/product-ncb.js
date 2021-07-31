$(document).ready(function(){

    // $('.application-items').slick({
    //     dots: true,
    //     infinite: false,
    //     // speed: 300,
    //     slidesToShow:5.6,
    //     slidesToScroll:0.7,
    //     responsive: [
    //     {
    //       breakpoint: 1900,
    //         settings: {
    //         slidesToShow:4.3,
    //         slidesToScroll:1,
    //         }
    //       },    
    //     {
    //         breakpoint: 1441,
    //         settings: {
    //         slidesToShow:4.3,
    //         slidesToScroll:1,
    //       }
    //     },          
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow:3.3,
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1.3,
    //         slidesToScroll: 1
    //       }
    //     }
    //       // You can unslick at a given breakpoint now by adding:
    //       // settings: "unslick"
    //       // instead of a settings object
    //     ]
    //   });
    
    $('.application-items').slick({
      dots: true,
      infinite: false,
      // speed: 300,
      slidesToShow:5.2,
      slidesToScroll:1,
      responsive: [
      // {
      //   breakpoint: 1900,
      //     settings: {
      //     slidesToShow:5.2,
      //     slidesToScroll:1,
      //     }
      //   },    
      {
          breakpoint: 1441,
          settings: {
          slidesToShow:4.2,
          slidesToScroll:1,
        }
      },          
      {
        breakpoint: 1025,
        settings: {
          slidesToShow:3.2,
          slidesToScroll:1,
        }
      },
      // {
      //   breakpoint:992,
      //   settings: {
      //     slidesToShow:3.2,
      //     slidesToScroll:1,
      //   }
      // },
      {
        breakpoint: 601,
        settings: {
          slidesToShow:2.2,
          slidesToScroll:1,
        }
      },
      
      {
        breakpoint: 481,
        settings: {
          slidesToShow:1.2,
          slidesToScroll: 1
        }
      }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }); 
    
});


