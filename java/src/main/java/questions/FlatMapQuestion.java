package questions;

import javax.xml.bind.JAXBException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static questions.Genre.COMEDY;
import static java.util.function.Function.identity;
import static java.util.stream.Collectors.*;

public class FlatMapQuestion {

    static private List<Movie> movieList;

    static void init() {
        movieList = new ArrayList<>();
        movieList.add(new Movie("Hotel Budapest", 2014, COMEDY, new String[]{"Ralfh Fines", "Tilda Swinton", "Saoirse Ronana", "Bill Murray"}));
        movieList.add(new Movie("Captain Zissou", 2004, COMEDY, new String[]{"Bill Murray", "Owen Wilson", "Cate Blanchett", "Anjelica Huston"}));
    }

    public static void main(String[] args) throws JAXBException {

        init();



        Map<String, Long> frequency = movieList.stream()
                .map(Movie::getCast)
                .flatMap(Arrays::stream)
                .collect(groupingBy(identity(), counting()));

        frequency.entrySet().stream()
                .forEach(System.out::println);
    }
}
