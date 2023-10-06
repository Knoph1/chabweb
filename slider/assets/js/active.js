(function($) {
	'use strict';
	jQuery(document).on('ready', function(){
        
        // Main Slider Js
        $('.main-slider').owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 2000,
            autoplayTimeout: 5000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });

        $(".main-slider").on("translate.owl.carousel", function(){
            $(".single-slider-item .slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slider-item .slider-text p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slider-item .slider-text .slider-button").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".main-slider").on("translated.owl.carousel", function(){
            $(".single-slider-item .slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slider-item .slider-text p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slider-item .slider-text .slider-button").addClass("animated fadeInDown").css("opacity", "1");
        });

    }); 	
})(jQuery);