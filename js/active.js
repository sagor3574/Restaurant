(function ($) {
	"use strict";
  jQuery(document).ready(function($){
    
    $('.navbar-toggle').click(function(){
        $('#Navigation').addClass('mobile-menu');
    });
    
    $('ul.nav.navbar-nav li a').click(function(){
        $('.navbar-collapse').removeClass('in');
    });

    // sticky Menu
    $("#stickyNav").sticky({ 
        topSpacing: 0,
        zIndex: 11,
    });

    // Smoot Scroll Effect
    $('li.smooth-scroll a') .bind('click', function(event){
        var $anchor = $(this);
        var headerHeight = '69';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')) .offset().top - headerHeight + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target : '.ManiMenu',
        offset : 70,
    });

    // Parallax
    $('.parallax-bg').scrolly({bgParallax: true});

    // owlCarousel
    $("#testimonial-slide").owlCarousel({
       loop:true,
       autoplay: true,
       autoPlay : 5000,
       items: 1,
       dots: false,
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
    });
    // Pogo slider script
    var mySlider = $('#PogoSlider').pogoSlider({
       pauseOnHover: false,
       autoplay : true,
       autoplayTimeout : 7000,
    }).data('plugin_pogoSlider');

    //Scroll To top Function apply
    jQuery(window).scroll(function(){
        var ScrollToTop = jQuery(window).scrollTop();
        //ScrollToTop Function
        if( ScrollToTop > 500){
            jQuery(".ScrollToTop").fadeIn();
        }
        else{
            jQuery(".ScrollToTop").fadeOut();
        }
    });
    //Scroll To top With animate
    jQuery(".ScrollToTop").click(function(){
        jQuery("body, html").animate({'scrollTop' : 0}, 1200, 'easeInOutExpo');

        return false
    });
    // WOW JS
    // new WOW().init();
  });
        
  jQuery(window).load(function(){
      jQuery(".Preloder").fadeOut(500);
  });

}(jQuery));


