
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

window.onload = function(){
    'use strict';
    /**
     * number 65
     */
    var x=0;
    function teast(){
        var myDiv=document.getElementById("test");
        x=x+1;
        if(x<65){
            myDiv.innerHTML=x;
            
        }
        else{
            clearInterval(x); 
        }


    }
    /**
     * number 35
     */
    var y=0;
    function teast2(){
        var myDiv=document.getElementById("test2");
        y=y+1;
        if(y<36){
            myDiv.innerHTML=y;
            
        }
        else{
            clearInterval(y); 
        }


    }
    /**
     * number 85
     */
    var L=0;
    function teast3(){
        var myDiv=document.getElementById("test3");
        L=L+1;
        if(L<86){
            myDiv.innerHTML=L;
            
        }
        else{
            clearInterval(L); 
        }


    }






    /**
     * number 20
     */
    var H=0;
    function teast4(){
        var myDiv=document.getElementById("test4");
        H=H+1;
        if(H<21){
            myDiv.innerHTML=H;
            
        }
        else{
            clearInterval(H); 
        }


    }
    
    setInterval(teast,150)
    setInterval(teast2,200)
    setInterval(teast3,100)
    setInterval(teast4,250)
    
}


$(document).ready(function(){
    $(".rowss1").hover(function(){
        $(".inthis1").css("opacity", "1");
        }, function(){
        $(".inthis1").css("opacity", "0");
    });
});


$(document).ready(function(){
    $(".rowss2").hover(function(){
        $(".inthis2").css("opacity", "1");
        }, function(){
        $(".inthis2").css("opacity", "0");
    });
});

$(document).ready(function(){
    $(".rowss3").hover(function(){
        $(".inthis3").css("opacity", "1");
        }, function(){
        $(".inthis3").css("opacity", "0");
    });
});

$(document).ready(function(){
    $(".rowss4").hover(function(){
        $(".inthis4").css("opacity", "1");
        }, function(){
        $(".inthis4").css("opacity", "0");
    });
});