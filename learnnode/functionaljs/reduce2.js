
/*
.reduce function
args:
- previousValue
- currentValue
- index
- initialvalue
*/

var a = ['a', 'b', 'c'];

a.reduce( function (previousValue, currentValue, index, initialValue){
  console.log("pv: " + previousValue + ", cv: " + currentValue + ", i: " + index + ", iv: " + initialValue ); 
},"-1", "-2", "-3", "-4")


// return the sum
var b = [1,2,3,4,5,6].reduce( function (a, b){
    return a + b
})

console.log(b);

// flatten out
var f = [ [1,2], [2, 5], [66, 77]].reduce( function(a, b){
    return a.concat(b);
})

console.log(f)

var fruits = ['Apple', 'Apple', 'Kiwi','Cheries', 'Apple', 'Kiwi'];

function countWords( arr ) {  
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 

    return countMap
  },{}) 
};

console.log( countWords ( fruits ));
