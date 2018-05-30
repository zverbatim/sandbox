// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function hurdle( n ) {
    return n > 10;
}

var array = [1, 22, 33, 10, 11, -1];
console.log( "Greater than 10:");
console.log( array.filter(hurdle) );


// filter a json object
var response = [
    {id : 1},
    {id : null},
    {},
    {id : NaN},
    {id : undefined}
];

var invalid = 0;

function byIdAndNumber ( obj ) {
    if ( 'id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id))
        return true;
    else {
        invalid++;
        return false;
    }
}

console.log("Filtered JSON");
console.log(response.filter( byIdAndNumber));
console.log("Invalid records: " + invalid);
