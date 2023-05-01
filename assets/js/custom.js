(function ($) {
    /* Document Ready State */
    jQuery(document).ready(function(){

        /*===== Hide Header on scroll down ======*/
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.header-section').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.header-section').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.header-section').removeClass('nav-up').addClass('nav-down');
                }
            }
            
            lastScrollTop = st;
        }
        /*===== Hide Header on scroll down ======*/

        /*===== Navbar ======*/
        $('.header-section .toggle-ic').click(function () {
            $('.header-section').toggleClass('menu-open');
            $('body').toggleClass('scroll-hidden');
        });
        $('.header-section .nav-menu a').click(function () {
            $('.header-section').removeClass('menu-open');
            $('body').removeClass('scroll-hidden');
        });
        /*===== Navbar ======*/

        // Recent stuff Slider Start
        $(".img-gallery-slider").owlCarousel({
            center: true,
            items:2,
            loop:true,
            margin:32,
            nav:false,
            dots: false,
            autoWidth:true,
            responsive : {
                0 : {
                    margin:16,
                },
                768 : {
                    margin:32,
                }
            }
        });
        // Recent stuff Slider End

        // About Slider Start
        $(".about-gallery-slider").owlCarousel({
            center: true,
            items:2,
            loop:true,
            margin:32,
            nav:false,
            dots: false,
            autoWidth:true,
            responsive : {
                0 : {
                    margin:16,
                },
                768 : {
                    margin:32,
                }
            }
        });
        // About Slider End

        // Recent stuff Slider Start
        $(".testimonial-slider").owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots: true,
        });
        // Recent stuff Slider End

         // Contact Form
        $('.form-control').on('input', function() {
            $(this).parent().toggleClass('not-empty', this.value.trim().length > 0);
          });
        
        $(function () {
            $('.form-control').focusout(function () {
                var text_val = $(this).val();
                $(this).parent().toggleClass('not-empty', text_val !== "");
            }).focusout();
        });
        
    });
    /* Document Ready State */

    /* Document Scroll State */
    var counted = 0;
    $(window).scroll(function() {
        if ($('#counter').length > 0) {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.about-count').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                    },

                    {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }

                    });
                });
                counted = 1;
            }
        }
    });
    /* Document Scroll State */
})(jQuery);