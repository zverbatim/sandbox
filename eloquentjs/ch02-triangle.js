/**
 Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 */
var l = 6;
var s = "#";
for (var i = 1; i <= 6; i++) {
    console.log(s);
    s += "#";
}

console.log();

// the elegant version
for (var line = "#"; line.length < 8; line += "#")
    console.log(line);


