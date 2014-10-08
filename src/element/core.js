define(function() {

    var Element = function Element() {
    
        this.el = {};
        
        this.init = function(element) {
            this.el = element || {};
            return this;
        };
    };
    
    return Element;

});