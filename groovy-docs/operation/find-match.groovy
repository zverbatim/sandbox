/**
 * Find & Match operator
 * http://docs.groovy-lang.org/latest/html/documentation/#_find_operator
 */

String phrase = "Leadership is the art of getting someone else to do something you want done because he wants to do it. - Dwight D. Eisenhower"

// for find is equivalent to `if (!foo.find())`
boolean resultFind = phrase =~ /art/
println resultFind

// for match is strict, equivalent to `if (foo ==~ /match/)`
boolean resultMatch
resultMatch = phrase ==~ /art/
println resultMatch

resultMatch = "aloha" ==~ /aloha/
println resultMatch

