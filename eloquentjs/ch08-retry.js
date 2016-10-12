/**
 * Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers, and in
 * the other 50 percent, raises an exception of type MultiplicatorUnitFailure.
 * Write a function that wraps this clunky function and just keeps trying until a call succeeds,
 * after which it returns the result.
 */

function MultiplicatorUnitFailure() {
    this.message = "Failed the coin toss, so no multiplication :(";
    this.prototype = Object.create(Error.prototype);
    this.prototype.name = "MultiplicatorUnitFailure";
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b)
    } catch (error) {
        console.error(error.message);
        return reliableMultiply(a, b);
    }
}

console.log(reliableMultiply(8, 8));
// → 64