define([
    './core',
    '../static/core',
    '../static/increment-integer'
], function(Element, AlmostVanilla){

    Element.fadeOut = function(increment, onComplete) {
        var el = this.el;
        AlmostVanilla.incrementInteger({
            start: 1,
            end: 0,
            increment: increment || -0.04,
            tick: function(val) {
                el.style.opacity = val;
            },
            complete: onComplete
        });
        return this;
    }

    Element.fadeIn = function(increment, onComplete) {
        var el = this.el;
        AlmostVanilla.incrementInteger({
            start: 0,
            end: 1,
            increment: increment || 0.04,
            tick: function(val) {
                el.style.opacity = val;
            },
            complete: onComplete
        });
        return this;
    }

});