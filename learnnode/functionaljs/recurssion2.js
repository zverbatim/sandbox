function doubleX(arr) {

    // final
    if ( !arr.length ) return []

    // operation on elem
    var element = arr[0]
    var doubleElement = element * 2

    // recurssion step: dumps the first element
    // important to use a different array refernce but not _arr_
    var tempArr = arr.slice(1)

    // recursive call
    return [doubleElement].concat( doubleX(tempArr) )
}

console.log ( doubleX([2,3,4,5]) );
