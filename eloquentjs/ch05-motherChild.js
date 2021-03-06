/**
 Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

 Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
 * */



var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
}

var haveMother = function (n) {
    return n.mother != undefined && byName[n.mother] != undefined;
};

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});


var ageDifferenceMother = function (n) {
    var mother = byName[n.mother];
    return n.born - mother.born;
};
console.log(average(ancestry.filter(haveMother).map(ageDifferenceMother)));