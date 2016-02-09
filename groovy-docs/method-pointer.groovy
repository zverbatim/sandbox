/**
 * Method pointer operator
 * http://docs.groovy-lang.org/latest/html/documentation/#method-pointer-operator
 */

class Movie{
    String title
}

def movies = [new Movie(title: "Alabama"), new Movie(title: "Iowa")]

String statement(Movie movie){
    "Sales for $movie.title were \$${Math.random() * 1000 as int} M"
}

def munchData(List elements, Closure action){
    def outcome = []
    elements.each {
        outcome << action(it)
    }
    outcome
}
println this.&munchData(movies, this.&statement)
