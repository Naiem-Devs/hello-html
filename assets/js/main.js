(function ($) {
"use strict";


// off canvas menubar
$('#my-navigation').iptOffCanvas({

	// base CSS class
	baseClass: 'offcanvas',
  
	// top, right, bottom, left
	type: 'right',
  
	// close other instances when one opens
	single: true,
  
	static: false
	
  });




// owlCarousel

$('.Portflio_slider').owlCarousel({
    loop:true,
    margin:0,
	items:3,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:3
        }
    }
})


// owlCarousel
$('.blog_slider').owlCarousel({
    loop:true,
    margin:0,
	items:4,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav: false,
	dots: true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:4
        }
    }
})

// owlCarousel
$('.slider_parson').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false ,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// WOW active
new WOW().init();

// niceSelect
$(document).ready(function() {
	$('select').niceSelect();
  });

})(jQuery);