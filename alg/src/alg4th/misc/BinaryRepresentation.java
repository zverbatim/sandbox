package alg4th.misc;

public class BinaryRepresentation {

    public static void main(String[] args) {
        int n = 2;
        String s = "";
        while (n > 0) {
            s = n % 2 + s;
            n /= 2;
        }
        System.out.println("binary representation: " + s);
    }
}
