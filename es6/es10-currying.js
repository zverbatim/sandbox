"use strict";
const before = function (greet, name) {
    console.log(greet + ' ' + name)
}

before('hello', 'world')

console.log("with apply")
before.apply(null, ['buenos', 'chequitas'])

console.log("with call")
before.call(null, 'buenos', 'chequitas')


// currying
const after = (greet) => {
    return (name) => {
        console.log(name + ' ~ ' + greet)
    }
}
const afterArrow = (greet) => (name) => console.log(name + '...' + greet)

after("hello")("world")
afterArrow("hello")("world")