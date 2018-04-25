$(document).ready(function () {

    var owl = $('.owl-carousel');
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('#owlcc').owlCarousel({
        animateOut: 'bounceOutDown',
        animateIn: 'flipInX',
        loop: true,
        nav: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items:1
            }
        }
    });
    $('#owlcc-2').owlCarousel({
        loop: true,
        nav: false,
        margin:1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items:1
            }
        }
    });



});
