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

while (!genObject.next().done){}