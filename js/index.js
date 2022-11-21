
/*      slider  */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        responsiveClass:true,
        dotsEach:true,
        margin:10,
        responsive:{
            0:{
                items:2,
                
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:6,
            }
        }
    
    });

});

/*$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    nav:true,

});*/