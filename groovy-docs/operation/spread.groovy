/**
 * Spread
 * http://docs.groovy-lang.org/latest/html/documentation/#_spread_operator
 */

// for methods
int sum(int a, int b, int c) {
    a + b + c
}
def args = [10, -7, 1]
println sum(*args)


// for list
def a = [1,2,3,4, *(5..<9), 9]
println ([*a, *(10..13)])

//