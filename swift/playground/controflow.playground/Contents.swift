/*
SWIFT - control flow
*/

import UIKit

var currency = ("USD", 100)

switch currency{
case ("EUR", _):
    print("it' EUR")
case ("USD", 200):
    print("USD  = 200")
case (_, 100):
    print("it's a 100")
default:
    print("hz")
}


var count = 100

switch count {
case 0...50:
    print("from 0 to 50")
default:
    print("anything else")
}


func hello(){
    print("Hello")
}
hello()


func addTwo(z : Int, alpha a : Int, b : Int) -> Int {
    return z + a + b
}

var c = addTwo(100, alpha: 1, b:3)


func addMany(numbers : Int ...) -> Int {
    var tempSum = 0
    for i in numbers {
        tempSum += i
    }
    
    return tempSum
}

var s = addMany(1,2,3,4,5)


// functional stuff
func createAdder(n : Int) -> Int -> Int {
    func adder(addedNumber : Int) -> Int {
        return n + addedNumber
    }
    
    return adder
}

var addTen = createAdder(100)
var addResult = addTen(5)

func passFunctionAsParam(n : Int, doSomething : (Int) -> Int ) -> Int {
    return doSomething(n)
}

passFunctionAsParam(10,  doSomething: addTen)


// closures
var sales  = [100, 120, 5, 20]
sales.sort { (a, b) -> Bool in
    b < a
}

sales.filter { (s) -> Bool in
    s > 20
}










