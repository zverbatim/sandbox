import static spark.Spark.*;

public class Working {
    public static void main(String[] args) {

        get("/", (req, res) -> "working...\n");

        get("/:name", (request, response) -> {
            return "passed param = " + request.params(":name") + "\n";
        });

    }
}