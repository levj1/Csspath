$(window).on('load resize', function () {
    $('.fullscreen').height($(window).height()).width($(window).width());
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(window).height()) {
        $('#navmain').addClass('navbar-fixed-top');
    } else {
        $('#navmain').removeClass('navbar-fixed-top');
    }
});