// JavaScript Document
$('#banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,	
	smartSpeed:1000,   
	autoplay:true,		
    autoplayTimeout:5000, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('#bai-viet').owlCarousel({
   	loop:true,	
	smartSpeed:1000,   	
	autoplay:true,		
   	 autoplayTimeout:5000,  
	nav:true,	
	margin:40,

	 responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
	
	  })
