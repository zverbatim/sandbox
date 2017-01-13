function* genFunc() {
    console.log("started");
    yield 'a';

    console.log("passed first yield");
    yield;
    console.log("passed second yield");
    yield 123;
    console.log("passed third yield");

    return "finished";
}

const genObject = genFunc();

// iterating through the generator
let a = genObject.next()
console.log("a", a)
console.log(genObject.next())
console.log(genObject.next())
console.log(genObject.next())