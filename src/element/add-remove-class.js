define([
    './core',
], function(Element){

    /**
     * 
     */
    Element.addClass = function(cl) {
        this.el.className += ' ' + cl;
        return this;
    }
    
    /**
     * 
     */
    Element.removeClass = function(cl) {
        this.el.className = this.el.className.replace(cl, '');
        return this;
    }
    
});