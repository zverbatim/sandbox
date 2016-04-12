package alg4th.misc.classicseries;

/**
 * Angel between hour and minute for a time.
 * Using the 0-12 format
 */
public class ClockAngle {

    private static void assertAngle(double actual, double expected) {
        if (actual != expected) {
            String message = "Actual: " + actual + ". Expected" + expected;
            throw new RuntimeException(message);
        }
    }

    private static double angle(double hour, double minute) {
        hour = hour == 12 ? 0 : hour;
        double hourAngle = hour * 30 + minute / 2;
        double minuteAngle = minute * 6;
        double angle = Math.abs(hourAngle - minuteAngle);

        return Math.min(angle, 360 - angle);
    }

    public static void main(String[] args) {
        assertAngle(angle(12, 45), 112.5);
        assertAngle(angle(0, 0), 0);
        assertAngle(angle(12, 0), 0);
        assertAngle(angle(3, 30), 75);
        assertAngle(angle(2, 23), 66.5);
    }
}
