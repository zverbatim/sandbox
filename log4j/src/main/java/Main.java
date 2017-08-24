import java.lang.*;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class Main {
    private final static Log logger = LogFactory.getLog(Main.class);

    public static void main(String[] args) {
        System.out.println("Working");
        logger.info("dummy info message");
        logger.error("dummy error message");
        logger.debug("dummy debugg message");

    }
}
