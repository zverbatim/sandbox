package oracle.docs.interfaces;

import java.util.TimeZone;

public class TimeImplementation implements TimeInterface {

    public String timeZonePrint(TimeZone timeZone) {
        return "id: " + timeZone.getID() + ", use day light: " + timeZone.useDaylightTime();
    }

    public static void main(String[] args) {
        System.out.println(TimeInterface.timeZone("EST"));
        System.out.println(TimeInterface.timeZone(""));

        TimeImplementation time = new TimeImplementation();

        System.out.println(time.timeZonePrint(TimeZone.getTimeZone("CST")));
    }
}
