import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSections = document.querySelectorAll('.page-section');
        this.headerLinks = document.querySelectorAll('.primary-nav a');
        this.createPageSectionWaypoints(this.headerLinks);
        this.addSmoothScrolling(this.headerLinks);
    }

    addSmoothScrolling(links) {
        $(links).smoothScroll();
    }

    createHeaderWaypoint() {
        let that = this;
        new Waypoint({
            element: this.headerTriggerElement,
            handler: function (direction) {
                if(direction == 'down') {
                    that.siteHeader.classList.add('site-header--dark');
                } else {
                    that.siteHeader.classList.remove('site-header--dark');
                }
            }
        });
    }

    createPageSectionWaypoints(headerLinks) {
        this.pageSections.forEach(page => {
            new Waypoint({
                element: page,
                handler: function(direction) {
                    if (direction == 'down') {
                        let matchingHeaderLink = page.getAttribute('data-matching-link');
                        headerLinks.forEach(headerLink => headerLink.classList.remove('is-current-link'));
                        document.querySelector(matchingHeaderLink).classList.add('is-current-link');
                    }
                },
                offset: '18%'
            });
            new Waypoint({
                element: page,
                handler: function(direction) {
                    if (direction == 'up') {
                        let matchingHeaderLink = page.getAttribute('data-matching-link');
                        headerLinks.forEach(headerLink => headerLink.classList.remove('is-current-link'));
                        document.querySelector(matchingHeaderLink).classList.add('is-current-link');
                    }
                },
                offset: '-40%'
            });
        })
    }
}

export default StickyHeader;