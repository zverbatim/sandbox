package questions;

import java.util.List;

public class Movie {

    private String title;
    private int yearRelease;
    private Genre genre;
    private String[] cast;

    public Movie() {}

    public Movie(String title, int yearRelease, Genre genre, String[] cast) {
        this.title = title;
        this.yearRelease = yearRelease;
        this.genre = genre;
        this.cast = cast;
    }

    public String[] getCast() {
        return cast;
    }

    public void setCast(String[] cast) {
        this.cast = cast;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYearRelease() {
        return yearRelease;
    }

    public void setYearRelease(int yearRelease) {
        this.yearRelease = yearRelease;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "title='" + title + '\'' +
                ", yearRelease=" + yearRelease +
                ", genre=" + genre +
                '}';
    }
}
