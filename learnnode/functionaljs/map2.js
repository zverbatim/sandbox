module.exports = function (array){
    return {
        doubleIt : function() {
            return array.map( function(num){
                return num * 2;
            });
        }
    }
}
