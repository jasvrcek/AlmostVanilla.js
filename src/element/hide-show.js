define([
    './core'
], function(Element){

    Element.prototype.hide = function() {
        this.el.style.display = 'none';
        return this;
    };

    Element.prototype.show = function(display) {
        this.el.style.display = display || 'block';
        return this;
    } 

});