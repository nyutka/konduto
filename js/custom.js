var navResize = function() {
    $("section.padding-nav").css("padding-top", $("header.navbar").outerHeight() + 47);
};

$(window).resize(navResize);

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navbar").addClass("stickyHeader");
    } else {
        $(".navbar").removeClass("stickyHeader");
    }
});

$(document).ready(function() {

    navResize();
    
    
    $('.newsletter-slider').slick({
        dots: true,
        infinite: true,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });    
    
    $('.publishers').slick({
        dots: false,
        infinite: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    new WOW().init();
    setTimeout(function () {
        $('.wow').removeClass('opacity-fix');
    }, 2000);

    (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
            new SelectFx(el);
        } );
    })();

    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('.navbar-toggler').toggleClass('collapsed');
    });

    $('.sidebar-overlay').click(function () {
        $('[data-toggle="offcanvas"]').click();
    });

    $(window)
        .resize(function(){
            if ($(window).width() > 1199) {
                $("header.navbar").headroom({
                    offset: 52
                });
            }
            else {
                $("header.navbar").headroom({
                    offset: 22
                });
            }
        })
        .resize();

    setTimeout(function(){ $(window).resize(); }, 1000);


    $('.icon-cycle').on('click', function () {
        var $header = $(this).closest('.section-header');
        var $section = $header.next('section');

        $header.toggleClass('closed');

        var initialHeight = $section.data('height');

        if (!initialHeight) {
            initialHeight = $section.height();
            $section.data('height', initialHeight);
        }

        var newHeight = $header.hasClass('closed') ? 0 : initialHeight;

        $section.animate({ height: newHeight });
    });

});