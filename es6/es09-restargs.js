'use strict'


let foo = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}

console.log("sum of 1,2,3,5 = ", foo(1, 2, 3, 5));