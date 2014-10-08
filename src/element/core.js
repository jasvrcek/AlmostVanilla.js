define(function() {

    var Element = {
    
        el: {},
                
        init: function(element) {
            this.el = element || {};
            return this;
        }
    };
    
    return Element;

});