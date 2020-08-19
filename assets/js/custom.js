(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });		
    // END MENU JS

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
    });

    // Home Slider JS
    $('.home-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
    });

    // Courses Slider JS
    $('.courses-slider').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        navText: [
            "<i class='icofont-hand-left'></i>",
            "<i class='icofont-hand-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
    // Counter JS
    $('.counter').counterUp({
        delay: 30,
        time: 2000
    });

        // Team Slider JS
        $('.team-slider').owlCarousel({
            loop:true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay:false,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                }
            }
        });
        // Logo Slider JS
        $('.logo-slider').owlCarousel({
            loop:true,
            margin: 80,
            nav: false,
            dots: false,
            smartSpeed: 1000,
            autoplay:false,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:6,
                }
            }
        });

    // Timer JS
    let getDaysId = document.getElementById('days');
    if(getDaysId !== null){
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let countDown = new Date('october 30, 2020 00:00:00').getTime();
        setInterval(function() {
            let now = new Date().getTime();
            let distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }, second);
    };

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });

    // WOW JS
    new WOW().init();

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-simple-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });
    
    // Sorting Portfolio JS
    $('.container').mixItUp();


    
}); 	
})(jQuery);