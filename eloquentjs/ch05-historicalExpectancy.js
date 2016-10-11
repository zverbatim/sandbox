/**
 When we looked up all the people in our data set that lived more than 90 years, only the latest generation
 in the data came out. Let’s take a closer look at that phenomenon.

 Compute and output the average age of the people in the ancestry data set per century.
 A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up,
 as in Math.ceil(person.died / 100).
 * */

var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);


function average(a) {
    return a.reduce(function (total, current) {
            return total + current;
        }, 0) / a.length;
}

function age(n) {
    return n.died - n.born;
}

var centuryAge = function (n) {
    return {
        century: Math.ceil(n.died / 100),
        age: age(n)
    }
};

console.log(
    ancestry.map(centuryAge)
);

var reformattedArray = ancestry.map(centuryAge).map(function (n) {
    var temp = {};
    temp[n.century] = n.age;
    return temp;
});

console.log(
    reformattedArray
);