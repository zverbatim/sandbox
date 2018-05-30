function sumArray ( arr ) {
    // end condition
    if ( !arr.length ) return 0

    // operation
    var tempS = arr[0]

    // next elem
    tempArray = arr.slice(1)

    // step
    return tempS + sumArray( tempArray )
}

console.log( sumArray( [1,2,3] ) );

