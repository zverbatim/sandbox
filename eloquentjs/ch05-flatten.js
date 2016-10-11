/**
 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single
 array that has all the elements of the input arrays.
 */

var arrays = [[1, 2, 3], [4, 5], [6, [8]]];
var out = [];
function flatten(arrays) {
    if (typeof  arrays == 'number') {
        out.push(arrays);
        return arrays;
    }
    else
        return arrays.forEach(function (a) {
            return flatten(a)
        });
}
flatten(arrays);
console.log(out);


// using the concat and reduce
// this solution though supports only on level of nesting
console.log(arrays.reduce(function (flat, current) {
    return flat.concat(current)
}, []));

// multiple levels
console.log(arrays.reduce(function (flat, current) {
    var out = [];

    function flatten(array) {
        if (typeof  array == 'number') {
            out.push(array);
            return array;
        }
        else
            return array.forEach(function (a) {
                return flatten(a)
            });
    }

    flatten(current);
    return flat.concat(out);
}, []));