trait Fly {
    String fly() { "flying" }
}

trait Migrate {
    String migrate() { "migrating" }
}

trait Consume {
    private String greetingMessage() {
        'Hello from a private method!'
    }

    abstract String diet()

    String consume() { "eating ${diet()}" }
}

class Bird implements Fly, Migrate, Consume {
    String food

    String diet() { this.food }
}

def crane = new Bird(food: "bugs")
println crane.fly()
println crane.migrate()
println crane.consume()
try {
    assert crane.greetingMessage()
} catch (MissingMethodException e) {
    println "it'a private in trait"
}