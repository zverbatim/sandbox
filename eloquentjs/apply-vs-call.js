/**
 * Source: http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
 */
function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}

theFunction("John", "fireman", "jumper");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");

console.log('----');


/**
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
function whoAreYou(name, job){
    console.log("My name is " + name + " and I am a " + job + ".");
}
function Dancer(name, job){
    whoAreYou.call(this, name, job);
    whoAreYou.apply(this, [name, job]);
}
var john = new Dancer("John", "Tango Dancer");



