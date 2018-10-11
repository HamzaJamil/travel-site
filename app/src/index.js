import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ModalBox from './modules/ModalBox'




var mobileMenu = new MobileMenu()
new RevealOnScroll($('.feature-item'), '85% ')
new RevealOnScroll($('.testimonial'), '80% ')
var stickyHeader = new StickyHeader()
var modalBox = new ModalBox()