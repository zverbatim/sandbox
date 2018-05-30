function arrayToList(table) {

  table.reverse();
  
  var list = {};
  var restContent = null;
  
  table.forEach(function (element) {
    list = {value:  element, rest:  restContent}
    restContent = list;
  })
  return list;
}


function listToArray(list){
    table = [];
    while (list !== null ){
        table.push(list.value);
        list = list.rest;
    }
  
  return table;
}

function prepend(number, restContent){
  return {value: number, rest: restContent}; 
}


function nth(list, nodeNumber){
  if ( nodeNumber === 0 ){
    return list.value;
  } else {
    return nth(list.rest, --nodeNumber);
  }
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
