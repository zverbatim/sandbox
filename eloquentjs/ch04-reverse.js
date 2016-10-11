/**
 Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
 For this exercise, write two functions, reverseArray and reverseArrayInPlace.

 The first, reverseArray, takes an array as argument and produces a new array that has the same
 elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
 it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

 */
function reverseArrayInPlace(a) {
    for (var i = 0; i < a.length / 2; i++) {
        var temp = a[i];
        a[i] = a[a.length - i - 1];
        a[a.length - i - 1] = temp;
    }

}

var a = [1, 2, 3, 4, 5];
reverseArrayInPlace(a);
console.log(a);