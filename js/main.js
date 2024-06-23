(function($) {
    "use strict";


    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

    // meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    $('.info-bar').on('click', function() {
        $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click', function() {
        $('.extra-info').removeClass('info-open');
    })


    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    /* info-bar */
    $('.info-bar').on('click', function() {
        $('.extra-info').addClass('info-open');
        $('.overlay').addClass('overlay-open');
    })

    $('.close-icon').on('click', function() {
        $('.extra-info').removeClass('info-open');
        $('.overlay').removeClass('overlay-open');
    })
    $('.overlay').on('click', function() {
        $('.extra-info').removeClass('info-open');
        $('.overlay').removeClass('overlay-open');
    })

    // mainSlider

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-angle-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-angle-right"></i></button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    // blog - active
    $('.postbox__gallery').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    /* client-acive */
    $('.client-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        items: 1,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    /* brand-active */
    $('.brand-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })


    /* testimonial-active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    /* testimonial2-active */
    $('.testimonial2-active').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: false,
        autoplay: false,
        navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    })
    /*=============================================
    	=    		 Jarallax Active  	         =
    =============================================*/
    $('.jarallax').jarallax({
        speed: 0.2,
    });

    /*=============================================
    	=         ProgressBar Active            =
    =============================================*/
    $('.progress-item').appear(function(e) {
        // Animated Prograssbar
        $(".progress--bar").each(function() {
            $(this)
                .find(".progress-fill")
                .animate({
                        width: $(this).attr("data-percentage"),
                    },
                    2000
                );
            $(this)
                .find(".progress-number")
                .animate({
                    left: $(this).attr("data-percentage")
                }, {
                    duration: 2000,
                    step: function(now, fx) {
                        var data = Math.round(now);
                        $(this)
                            .find(".percent")
                            .html(data + "%");
                    },
                });
        });
    });

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

    /*-------------------------
    		showlogin toggle function
    	--------------------------*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });

    /*-------------------------
    	showcoupon toggle function
    --------------------------*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });

    /*-------------------------
    	Create an account toggle function
    --------------------------*/


    $('#xbox').on('click', function() {
        $('#xbox_info').slideToggle(900);
    });

    /*-------------------------
    	Create an account toggle function
    // --------------------------*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });



    /*=============================================
    	=    		 Cart Active  	         =
    =============================================*/
    $('.qtybutton-box span').on("click", function() {
        var $input = $(this).parents('.quantity-form').find('input');
        if ($(this).hasClass('minus')) {
            var count = parseFloat($input.val()) - 1;
            count = count < 1 ? 1 : count;
            if (count < 2) {
                $(this).addClass('dis');
            } else {
                $(this).removeClass('dis');
            }
            $input.val(count);
        } else {
            var count = parseFloat($input.val()) + 1
            $input.val(count);
            if (count > 1) {
                $(this).parents('.quantity-form').find(('.minus')).removeClass('dis');
            }
        }
        $input.change();
        return false;
    })
    // Cart Quantity Js
    $(".cart-minus").click(function() {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $(".cart-plus").click(function() {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    // portfolio active
    $('.gallery-area').imagesLoaded(function() {
        var grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        });

        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({
                filter: filterValue
            });
        });

        //for portfolio menu active class
        $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });


    // portfolio active
    $('.gallery-area').imagesLoaded(function() {
        var grid = $('.grid2').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        })

        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({
                filter: filterValue
            });
        });

        //for portfolio menu active class
        $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });

    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // nice select
    $(document).ready(function() {
        $('select').niceSelect();
    });

    // WOW active
    new WOW().init();




})(jQuery);