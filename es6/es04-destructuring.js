'use strict'

// destructuring an array
let [first,,,last] = [0,1,2,3];
console.log("first=", first, ", last=", last)

// destructuring an object
let purchase = {
    name: 'kalamazoo',
    price: 1000,
    complete: true,
    toString(){
        return 'to string foo'
    }
}

// destruct to grab a property
let {name} = purchase
console.log("ts()", name)

// destruct to grab simple f(x)
let {toString: ts} = purchase
console.log("ts()", ts())

// destruct to grab nested object
let transactions ={
    foo: {
        name: "foo",
        done: true
    },
    bar: {
        name: "bar",
        done: true
    },
    xyz: {
        name: "xyz",
        done: true
    }


}

let {xyz} = transactions
console.log("xyz", xyz)

