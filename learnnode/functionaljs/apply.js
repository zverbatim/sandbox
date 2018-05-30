//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


//take an array and apply it as an argument to a function
var numbers = [2,3,4,5,6];


// no clue why null first arg ?
var min = Math.min.apply(null, numbers);
var max = Math.max.apply(null, numbers);

console.log("Min: " + min);
console.log("Max: " + max);


