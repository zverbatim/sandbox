// output the sum of the args

var args = process.argv
var sum = 0;
for (i = 2; i < args.length; i++) {i
    sum += +args[i]         // + is coercing to numbers the string
}

console.log( sum );
