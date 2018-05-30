function reverseArray (table) {
  var reversed = []
  for (var i = table.length -1; i >= 0; i--){
    reversed.push(table[i]);
  }
  
  return reversed;
}


function reverseArrayInPlace(table){

  var i = table.length -1;
  var j = 0;
  while (j < i){
    var interm = table[j];
    table[j] = table[i];
    table[i] = interm;
    j++;
    i--;
  }
  
  return table;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
