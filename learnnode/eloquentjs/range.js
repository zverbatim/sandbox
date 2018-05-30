function range(start, end, step){
  
  // default step
  if (step == undefined) {
    step = 1;
  }
  
  // negative step
  if ( step < 0 && start > end){
    step *= -1;
    var interm = start;
    start = end;
    end = interm;
  }
  
  var table = [];
  while (start <= end) {
    table.push( start );
    start += step;
  }
  
  return table;
}

function sum(table){
    var sum = 0;

    table.forEach(function (element){
        sum += element;
    });

    return sum;
}


console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
