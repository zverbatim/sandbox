var abc = new RegExp("abc");
var _abc = /abc/;

console.log(/abc/.test("abcde"));
// → true
console.log(abc.test("abxde"));
// → false
console.log(_abc.test("abxde"));
// → false
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

// To invert a set of characters
var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true

// optional
var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true


// date matching
var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));
// → true

// i is for ignore case
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoofooohoohoosdfdso"));
// → true

console.log("one two 100".match(/\d+/));
console.log("one two 100".match(/\d+/).pop());

// groups with ()
console.log(/(\d)+/.exec("123 14"));
