/**
 Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
 from start up to (and including) end.

 Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
 Run the previous program and see whether it does indeed return 55.
 */

function range(start, end, step) {
    var a = [];
    if (step == undefined)
        step = 1;
    for (var i = start; i <= end; i += step)
        a.push(i);
    return a;
}

function sum(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++)
        s += a[i];
    return s;
}

console.log(sum(range(1,10)));
