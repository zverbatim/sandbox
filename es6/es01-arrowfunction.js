'use strict'

function foo() {
    console.log("foo")
}

// can be done with shorter notation
let foo2 = () => console.log("foo")
foo2()

let foo3 = (arg) => console.log("hello ", arg)
foo3('john')


// pass a default value for the function argument
let foo4 = function (arg = "peter") {
    console.log("hello ", arg)
}
foo4()

// shorthand notation
let foo5 = function () {
    const a = 100
    const b = "BBB"

    return {
        a,
        b
    }
}
console.log("foo5()", foo5())

// destructuring from a object
let {a, b} = foo5();
console.log("a = ", a, ", b = ", b)

// assign custom names
let {a:alabama, b:boston} = foo5();
console.log("alabama = ", alabama, ", boston = ", boston)






