import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'


class StickyHeader {
    constructor() {
        this.siteHeader = $('.header')
        this.headerTriggerElement = $('.large-hero__title')
        this.pageSection = $('.page-section')
        this.headerLinks = $('.primary-nav a')
        this.headerWaypoint()
        this.pageSectionWaypoint()
        this.addSmoothScrolling()

        // for waypoint refresh
        this.lazyIamges = $('.lazyload')
        this.waypointRefresh()
    }

    waypointRefresh() {
        this.lazyIamges.on('load', function () {
            Waypoint.refreshAll()
        })
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll()
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
                    that.headerLinks.removeClass('is-current-link')
                }
            }
        })
    }

    pageSectionWaypoint() {
        var that = this;
        this.pageSection.each(function () {
            var currentSection = this;
            new Waypoint({
                    element: currentSection,
                    handler: function (direction) {
                        if (direction == 'down') {
                            var matchingHeaderLink = currentSection.getAttribute("data-matching-link")
                            that.headerLinks.removeClass('is-current-link')
                            $(matchingHeaderLink).addClass('is-current-link')
                        }
                    },
                    offset: '70px'
                }),
                new Waypoint({
                    element: currentSection,
                    handler: function (direction) {

                        if (direction == 'up') {
                            var matchingHeaderLink = currentSection.getAttribute("data-matching-link")
                            that.headerLinks.removeClass('is-current-link')
                            $(matchingHeaderLink).addClass('is-current-link')
                        }
                    },
                    offset: '-60%'
                })
        })

    }

}


export default StickyHeader