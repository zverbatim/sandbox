package hello

class User(var name: String, var email: String){

    override fun toString(): String {
        return "USER = [name : $name, email : $email]"
    }
}

data class DataUser(val name: String, var email: String)

fun sumTwo(a: Int, b: Int): Int {
    return a + b
}

fun direction(param : Int) : String{
    val direction = if (param == 1) {
        "S"
    } else {
        "N"
    }

    return direction
}


fun main(args: Array<String>) {
    println("${sumTwo(100, 200)}")

    val admin = User("john", "e@w.com")
    val supervisor = User("peter", "p@w.com")
    val assistant = supervisor

    val customer = DataUser("Caleb", "c@w.com")

    println(admin)
    println(supervisor)
    println(customer)

    println("Assistant name ${assistant.name}")
    assistant.name = "new name"
    println("Assistant name ${assistant.name}")
    println("Supervisor name ${supervisor.name}")

    println("Admin to string: " + admin)

    println("Direction: " + direction(10))
}