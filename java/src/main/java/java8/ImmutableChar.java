package java8;

public class ImmutableChar {

    public static void main(String[] args) {
        final char[] vowels = new char[]{'a', 'e', 'i', 'o', 'u'};

        // static error
        //vowels = new char[]{'x', 'y', 'z'};

        vowels[0] = 'z';
    }
}
