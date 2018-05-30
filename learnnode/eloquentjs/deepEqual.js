function deepEqual(o1, o2) {
    if (o1 === o2) return true;

    if (o1 == null || typeof o1 != "object" ||
        o2 == null || typeof o2 != "object") {
        return false;
    }

    var node1 = 0, node2 = 0;

    for (var key in o1) {
        node1 += 1;
    }

    for (var key in o2) {
        node2 += 1;
        if (!(key in o1) || !deepEqual(o1[key], o2[key]))
            return false;
    }

    return node1 == node2;
}

var obj = {here: {is: "an"}, object: 2};
//console.log(obj['here']);

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true