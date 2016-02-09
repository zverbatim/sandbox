/**
 * Object operators
 * http://docs.groovy-lang.org/latest/html/documentation/#_object_operators
 */

class User {
    public final String name

    User(String name) { this.name = name }

    String getName() { "Name: $name" }
}

def user = new User('Bob')

// accesses the getter
println  user.name == 'Name: Bob'

// directly access the field, not the getter
println  user.@name == 'Bob'

// method pointer operator
def str = 'example of method reference'
def fun = str.&toUpperCase
def upper = fun()
println  upper == str.toUpperCase()
