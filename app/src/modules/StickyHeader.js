import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyHeader {
    constructor() {
        this.siteHeader = $('.header')
        this.headerTriggerElement = $('.large-hero__title')
        this.pageSections = $('page-section')
        this.headerWaypoint()
        this.pageSectionWaypoint()
    }
    headerWaypoint() {
        var that = this;
        new Waypoint({
            element: that.headerTriggerElement[0],
            handler: function (direction) {
                if (direction == 'down') {
                    that.siteHeader.addClass('header--dark')
                } else {
                    that.siteHeader.removeClass('header--dark')
                }
            }
        })
    }
    pageSectionWaypoint() {
        this.pageSections.each(function () {
            var currentSection = this;
            new Waypoint({
                element: currentSection,
                handler: function () {
                    var matchingHeaderLink = currentSection.getAttribute("data-matching-link")
                    $(matchingHeaderLink).addClass('is-current-link')
                }
            })
        })
    }
}

export default StickyHeader