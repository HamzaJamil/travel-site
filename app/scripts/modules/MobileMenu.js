import $ from './jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $('.header__menu-icon');
        this.menuContent = $('.header__menu-content');
        this.events();

    }
    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }
    toggleMenu() {
        this.toggleClass('header__menu-content--is-visible');
    }
}

export default MobileMenu;