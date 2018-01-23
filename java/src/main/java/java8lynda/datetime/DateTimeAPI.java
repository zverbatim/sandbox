package java8lynda.datetime;


import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;


public class DateTimeAPI {

    static void instant() throws InterruptedException {
        Instant start = Instant.now();

        Thread.sleep(2000);

        Instant end = Instant.now();

        Duration d = Duration.between(start, end);

        System.out.println("Duration in seconds = " + d.getSeconds());
        System.out.println("Duration in millis = " + d.toMillis());
    }

    static void localDate() {

        LocalDate ld = LocalDate.now();
        System.out.println("LocalDate.now  = " + ld);

        // everything is 1 index based
        LocalDate ld2 = LocalDate.of(2018, 1,1);
        System.out.println("LocalDate with defined year, month, day= " + ld2.toString());
    }


    public static void main(String[] args) throws InterruptedException {
        instant();
        localDate();
    }
}
