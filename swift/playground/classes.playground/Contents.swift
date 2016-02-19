/*
SWIFT - Classes
*/

import UIKit

var str = "Hello, playground"

class Cup {
    var price : Int?
    
    func identityString() {
        print("Cup selling for \(self.price)")
    }
}

var cup1 = Cup()
let cup2 = Cup()
cup2.price = 100
cup2.identityString()

struct Resolution {
    var width = 0
    var height = 0
}

class VideoMode {
    var resolution = Resolution()
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}

let someResolution = Resolution()
var someVideoMode1 = VideoMode()
var someVideoMode2 = VideoMode()

someVideoMode1.interlaced = true


// class with initializer
class Pot {
    // ?  mean it's optional
    var volume : Int?
    
    // with default value
    var price : Int = 100
    
    // set the value in init()
    var location : String
    
    init() {
        location = "Greece"
    }
}

