/**
 Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

 var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
 */

function arrayToList(a) {
    var rest = null;
    for (var i = a.length - 1; i >= 0; i--) {
        rest = {
            value: a[i],
            rest: rest
        }
    }
    return rest;
}

function listToArray(list) {
    var a = [];
    while (list != null) {
        a.push(list.value);
        list = list.rest;
    }
    return a;
}

function prepend(a, list) {
    return {
        value: a,
        rest: list
    }
}

function nth(list, index) {
    if (!list)
        return undefined;
    else
        return listToArray(list)[index];
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));