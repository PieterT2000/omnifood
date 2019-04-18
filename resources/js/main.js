let target = $('#features').offset().top;
$(window).scroll(function () {
    if ($(window).scrollTop() >= target - 60) {
        $('nav').addClass('sticky');
        $('.sticky').css({ opacity: 1 })
    } else {
        $('.sticky').css({ opacity: 0 })
        $('nav').removeClass('sticky');
    }
});