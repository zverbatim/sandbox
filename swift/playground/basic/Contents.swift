
/*
    SWIFT  - The basic
    Notes from swift documentation
*/

import UIKit

var str = "Hello, playground"
let CONSTANT = 10

// error
// CONSTANT = "a"
// str = 1
str  = "10"

var dalmatians : Float = 101
dalmatians.description
dalmatians.advancedBy(10)
dalmatians + 1/3


var welcome : String
welcome = "Hello"
welcome += "\tWorld"

var red, yellow, blue: Double
red = 123.3

print("\(welcome)\t\(red)")

let cat = "🐱";
print(cat)

var maxInt = UInt64.min

/* 
    literals
*/
var binaryNumber = 0b100
binaryNumber == 4
var octalNumber = 0o100
var hexadecimalNumber = 0xA
var exponentInt = 1.4e2
var expoHexa = 0xAp-3
var hexadecimalDouble = 0xC.3p0
var billion = 1_000_000_00.000_4

// error
// var hexaFloat = 0x17.11


/*
    conversion
*/
var three = 3
var restOfPi : Double = 0.14
var fullPi = Double(three) + restOfPi


/*
    booleans
*/
if true{
    print("Hello")
}

if 2 != 3 {
    print("\(fullPi)")
}


/*
    tuples
*/
var temp = ("Chicago", 77)
var (city, degrees) = temp
city == "Chicago"

var completedTemp = (city: "Washington", degrees :  "80")
completedTemp.degrees == "80"

/*
    optional
*/
var defaultNil : String?
defaultNil == nil
var noDefault : String
// error
//noDefault == nil


/*
    optional binding
*/
if var a = Int("100") where a < 456 {
  print ("\(a) < 456")
} else {
    print("should not get here")
}


/*
    error handling
*/
func division( a : Int,  b: Int)  throws {
    a / b
}
var n :Int = 10
//do {
//    try{
//        division(10: Int, 10: <#T##Int#>)
//    }
//    catch{
//    }
//}
//division(a : n, b : n)

/*
    error handling
*/
assert(4 < 100)
4 == 100
//error
// assert(4 > 100)


/*
    operators
*/
var a = 10
var b  = a > 10 ? a : -3
b == -3

for i in 1...5 {
    print("\(i)")
}

var states = ["NY", "DC"]
for s in states {
    print("\(s)")
}
states.count == 2

for c in "hello world".characters{
    print("\(c)")
}







