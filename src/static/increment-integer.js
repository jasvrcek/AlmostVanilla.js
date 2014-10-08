define([
    './core',
], function(AlmostVanilla){

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
    
});