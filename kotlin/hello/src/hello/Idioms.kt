package hello

class Card(name: String)
class Game(name: String)

fun main(args: Array<String>) {

    var array = 1..10
    array.forEach {
        print("$it, ")
    }

    // even
    var even = array.filter { it % 2 == 0 }
    println("\n" + even.contains(3))

    var odd = array.filter { it % 2 == 1 }.joinToString(",")
    println(odd)

    var hum = Card("Hearts")
    var gym = Game("Aloha")

    when (hum) {
        is Card -> println("I'm a card")
        //is Game -> println("I'm a game")
        else -> println("Other")
    }
}



