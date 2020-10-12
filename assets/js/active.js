(function($){
	"use strict";
	
    jQuery(document).ready(function ($) {
        var $main_menu = $('.main-menu');
        $main_menu.slicknav();

		$('.welcome-slider').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            autoplay: false,
        });

		$('.footer-top-carousel').owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            autoplay: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                },
                768:{
                    items:3,
                },
                991:{
                    items:4,
                }
            }
        });

	});
	
	
	jQuery(window).on("load", function(){
		
	});
	
})(jQuery);
