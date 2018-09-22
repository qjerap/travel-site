import mobileMenu from './modules/MobileMenu';
import revealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


let MobileMenu = new mobileMenu();

new revealOnScroll('.feature-item', '85%');
new revealOnScroll('.testimonial', '85%');

let stickyHeader = new StickyHeader;


