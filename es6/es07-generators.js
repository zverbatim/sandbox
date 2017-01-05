'use strict'

function* dummy(){
    yield "buenos";
    yield "noches";
    yield "amigos";
}

// with the done value
let d = dummy()
console.log(d.next())
console.log(d.next())
console.log(d.next())
console.log(d.next())

// just the value
let d2 = dummy()
console.log(d2.next().value)
console.log(d2.next().value)
console.log(d2.next().value)
console.log(d2.next().value)

// just the done
let d3 = dummy()
console.log(d3.next().done)
console.log(d3.next().done)
console.log(d3.next().done)
console.log(d3.next().done)


// "incrementor"
function* inc(x){
    while (true){
        yield x++
    }
}

let i = inc(10)
console.log(i.next().value)
console.log(i.next().value)
console.log(i.next().value)
console.log(i.next().value)




