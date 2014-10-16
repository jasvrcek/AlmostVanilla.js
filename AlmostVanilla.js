(function(){

    /**
     * element methods
     */
    var AV = function(element) {
    
        this.el = element || {};
        
        this.fadeOut = function(increment, onComplete) {
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

        this.fadeIn = function(increment, onComplete) {
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

        this.hide = function() {
            this.el.style.display = 'none';
            return this;
        }

        this.show = function(display) {
            this.el.style.display = display || 'block';
            return this;
        }
        
        this.addClass = function(cl) {
            this.el.className += ' ' + cl;
            return this;
        }

        this.removeClass = function(cl) {
            this.el.className = this.el.className.replace(cl, '');
            return this;
        }
    }
    
    var AlmostVanilla = function(element) {
        return new AV(element);
    }
    
    /**
     * @var object options
     *  - start: integer
     *  - end: integer
     *  - increment: amount to increment every animation frame
     *  - tick: callback to call every tick
     *  - complete: optional callback to call on complete
     */
    AlmostVanilla.incrementInteger = function(options) {
        var options = options || {};

        if (typeof options.start !== 'number')      throw new Error('options.start must be a number');
        if (typeof options.end !== 'number')        throw new Error('options.end must be a number');
        if (typeof options.increment !== 'number')  throw new Error('options.increment must be a number');
        if (typeof options.tick !== 'function')     throw new Error('options.tick must be a function');

        var value = options.start;

        var tick = function() {

            value += options.increment;

            if (
                (options.increment > 0 && value < options.end) || 
                (options.increment < 0 && value > options.end)
            ) {
                options.tick(value);
                requestAnimationFrame(tick);
            } else {
                options.tick(options.end);
        
                if (typeof options.complete === 'function') options.complete();
            }
        };

        tick();
    }
    
    return window.AlmostVanilla = AlmostVanilla;

})();