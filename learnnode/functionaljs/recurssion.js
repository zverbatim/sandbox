function reduce(arr, fn, initial) {

  return (function reduceOne(index, value) {
    // end 
    if (index > arr.length - 1) 
        return value 
    
    // call to next step
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) 
  })
    (0, initial) 
    // IIFE: Immediatly - Invoked Function Expression
    // read on IIFE: http://benalman.com/news/2010/11/immediately-invoked-function-expression
}

module.exports = reduce
