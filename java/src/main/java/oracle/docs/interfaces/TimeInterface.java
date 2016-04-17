package oracle.docs.interfaces;

import java.util.TimeZone;

public interface TimeInterface {

    static TimeZone timeZone(String tz) {
        try {
            return TimeZone.getTimeZone(tz);
        } catch (Exception e) {
            System.out.println("Wrong tz string: " + tz);
            System.out.println(e + "\nSetting the default.");
            return TimeZone.getDefault();
        }
    }

    default String timeZonePrint(TimeZone timeZone){
        return "id: " + timeZone.getID() + ", offset in hrs: " + (timeZone.getRawOffset() / 60 / 60 / 1000);
    }
}
