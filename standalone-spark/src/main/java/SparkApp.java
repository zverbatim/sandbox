
import static spark.Spark.*;

public class SparkApp {
    public static void main(String[] args) {
        get("/", (req, res) -> "Hello World. Spark framework is here.");
    }
}
