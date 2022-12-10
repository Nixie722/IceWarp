$('li').click(function () {
    let submenu = $(this).children('.submenu');
    let isActive = false;
    if (submenu.hasClass('active')) {
        submenu.removeClass('active')
    } else {
        isActive = !!$('.submenu.active')[0]; // check if menu is opened
        $('.submenu.active').removeClass('active'); // remove active class
        isActive ? setTimeout(function(){ submenu.addClass('active');}, 300) : submenu.addClass('active'); // wait for menu to close if different one is opened
    }

    $('.submenu').click(function(e) {
        e.stopPropagation();
    });

});

$('#menu-mobile').click(function () {
    $(this).toggleClass('active');

    $('.menu-mobile-container').click(function(e) {
        e.stopPropagation();
    });
});


