package hello

import java.util.*

// default value
fun double(number: Int = 10): Int {
    return number * 2
}

// Null safe argument
// Unit corresponds to void
fun greet(name: String?): Unit {
    if (name != null) {
        println("Hi $name !")
    } else {
        println("Hi there!")
    }
}

// one liners
fun triple(num: Int): Int = num * 3

// multiple arguments
fun <T> sum(vararg a: T): List<T> {
    val result = ArrayList<T>()
    for (t in a) {
        result.add(t)
    }
    return result
}

fun add(list: List<Int>): Int {
    var s = 0
    list.forEach {
        s += it
    }
    return s
}

// tail recursion
tailrec fun findFixPoint(x: Double = 1.0): Double
        = if (x == Math.cos(x)) x else findFixPoint(Math.cos(x))

fun main(args: Array<String>) {
    println(double())
    println(double(20))

    greet(null)
    greet("Suunto")

    println(triple(3))

    val vector = listOf(1, 2, 34)
    println(vector)
    println(sum(vector))
    println(add(vector))

    println(findFixPoint())
    println(findFixPoint(-0.4))
}