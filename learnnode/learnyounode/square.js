module.exports = function( w ) {
    return {
        area: function() {
            return w * w;
        }, 
        perimeter: function() {
            return 4 * w;
        }
    }
}
