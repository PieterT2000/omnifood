$(document).ready(function () {
    //load sections below the fold
    $('#page').load('../resources/data/home-below-fold.min.html');
});

window.onload = function () {
    //set images corresponding to screenwidth
    optimizeImgs();

    //sticky navigation
    let target = $('#features').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= target - 60) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    //smooth scrolling when clicking on buttons on main slider
    $('.js--scroll-to-plans').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#plans').offset().top }, 800);
    });
    $('.js--scroll-to-start').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#features').offset().top }, 800);
    });

    // smooth scrolling to anchors
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // mobile nav
    $('.js--nav-icon').click(function () {
        const nav = $('.main-nav');
        const icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-md-close');
        }
    })

}

// on resize adjust images
$(window).resize(function () {
    optimizeImgs();
})

function optimizeImgs() {
    if ($(window).width() < 768) {
        $(".section-meals img").each(function () {
            if ($(this).attr("src").includes('mobile')) {
                return;
            } else {
                $(this).attr("src", $(this).attr("src").replace("img/", "img/mobile/"));
            }
        });
    } else {
        $(".section-meals img").each(function () {
            if ($(this).attr("src").includes('mobile')) {
                $(this).attr("src", $(this).attr("src").replace("img/mobile/", "img/"));
            } else {
                return;
            }
        });
    }

}