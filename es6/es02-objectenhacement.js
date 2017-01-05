'use strict'

let coffee = 'dark';
let price = 10.2

let purchase = () => ({
    coffee,
    price,
    drink (){
        return "i'm drinking it"
    }
});

console.log("purchase().drink()", purchase().drink())


// set with a property
let purchase2 = () => ({
    coffee,
    price,
    ["drink"] (){
        return "i'm drinking it"
    }
});

console.log("purchase()[\"drink\"]", purchase()["drink"]())

// spread operator
let a = [1,2,4,5];
let b = [1,2,4,5];

console.log("concat the old way", a.concat(b))
console.log("a merged wit b", [...a, ...b]);
a.push(b);
console.log("the result of a push", a)








