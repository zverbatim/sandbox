/**
 Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

 Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
 * */

function countBs(s) {
    return countChar(s, "B");
}


function countChar(s, letter) {
    var c = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == letter)
            c++;
    }
    return c;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

