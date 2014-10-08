define([
    './core'
], function(Element){

    Element.hide = function() {
        this.el.style.display = 'none';
        return this;
    };

    Element.show = function(display) {
        this.el.style.display = display || 'block';
        return this;
    };

});