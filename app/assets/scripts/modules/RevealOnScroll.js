import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = document.querySelectorAll(els);
        this.hideInitially();
        this.createWaypoints(offset);
    }

    hideInitially() {
        this.itemsToReveal.forEach(item => item.classList.add('reveal-item'));
    }

    createWaypoints(offset) {
        this.itemsToReveal.forEach(item => {   
            new Waypoint({
                element: item,
                handler: function() {
                    item.classList.add('reveal-item--is-visible');
                },
                offset: offset
            })
        })
    }
}

export default RevealOnScroll;


