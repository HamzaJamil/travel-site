/* Mobile Menu */
$(function () {
    $('.header__menu-icon').on('click touch', function () {
        $('.header__content-menu').toggleClass('header__content-menu--visible');
    });

});