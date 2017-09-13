import spark.servlet.SparkApplication;

import static spark.Spark.*;

public class App implements SparkApplication {

    public static void main(String[] args) {
        new App().init();
    }

    @Override
    public void init() {
        get("/", (req, res) -> "working...\n");

        get("/:name", (request, response) -> "passed param = " + request.params(":name") + "\n");
    }
}