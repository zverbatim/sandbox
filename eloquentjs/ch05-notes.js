/**
 * Notes on chapter 05
 * */

// pass a action to do smthg with each array element
function forEach(a, action) {
    for (var i = 0; i < a.length; i++)
        action(a[i])
}

var a = [10, 20, 30];
forEach(a, console.log);

var sum = 0;
forEach(a, function (n) {
    sum += n;
});
console.log("sum = ", sum);

// built in forEach function
a.forEach(function (value, index) {
    console.log("a[", index, "] = ", value)
});


// define function that define the flow
function unless(test, action) {
    if (!test)
        action();
}

function repeat(times, body) {
    for (var i = 0; i <= times; i++)
        body(i)
}


// display only the even numbers
repeat(5, function (n) {
    unless(n % 2 != 0, function () {
            console.log(n, "is even")
        }
    );
});


// json demo
var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log("the lenght = ", ancestry.length);
console.log(JSON.stringify(ancestry[0]));

// function to filter the array
function filterJson(array, test) {
    var selected = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            selected.push(array[i])
    }
    return selected;
}

// filterJson the woman before 1900
console.log(filterJson(ancestry, function (a) {
    return a.sex == 'f' && a.born < 1900;
}));


// using the defined
console.log("*******");
console.log(ancestry.filter(function (n) {
    return n.born > 1900;
}));

// using the mapping - which alters the table
// 1. identify all the women
// 2. extract their name only using `map`
var w = ancestry.filter(function (n) {
    return n.sex == 'f';
});
console.log(w.map(function (n) {
    return n.name
}));

// reduce can be applied to an array and needs:
// - combination function
// - a start
console.log("reduce application ...");
console.log([10, 20, 30, 40].reduce(function (a, b) {
    return a + b;
}, 0));

// find the earliest year of birth for women in the ancestry file
console.log("earliest year for female: ", ancestry.filter(function (a) {
    return a.sex == 'f';
}).reduce(function (current, min) {
    if (current.born < min.born)
        return current;
    else
        return min;
}));

// composability applies
var male = function (n) {
    return n.sex == 'm'
};
var female = function (n) {
    return n.sex == 'f'
};
var age = function (n) {
    return n.died - n.born
};

// useful documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var average = function (a, b, count, array) {
    if (count == array.length - 1)
        return (a + b) / array.length;
    else
        return a + b;
};

console.log("avg male age = ", ancestry.filter(male).map(function (a) {
        return age(a);
    }).reduce(average)
);

console.log("avg female age = ", ancestry.filter(female).map(function (a) {
        return age(a);
    }).reduce(average)
);

// dna exercise
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});
console.log(byName["Philibert Haverbeke"]);

// binding
// - the initial way with a filter
var theSet = ["Carel Haverbeke", "Maria van Brussel",
    "Donald Duck"];
function isInSet(set, person) {
    return set.indexOf(person.name) > -1;
}
console.log(ancestry.filter(function(person) {
    return isInSet(theSet, person);
}));

// with bind key word
console.log(ancestry.filter(isInSet.bind(null, theSet)))













