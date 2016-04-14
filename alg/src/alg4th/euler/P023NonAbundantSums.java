package alg4th.euler;

import java.util.ArrayList;
import java.util.List;
import java.util.NavigableMap;

/**
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 * For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
 * which means that 28 is a perfect number.
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant
 * if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be
 * written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all
 * integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper
 * limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be
 * expressed as the sum of two abundant numbers is less than this limit.
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

public class P023NonAbundantSums {

    static final int N = 28123;

    private static List<Integer> generateAbundant(){
        List<Integer> abundant = new ArrayList<>();
        for (int i = 3; i < N; i++) {
            if (sumDivisors(i) > i){
                abundant.add(i);
            }
        }
        return abundant;
    }

    private static int sumDivisors(int i) {
        if(i == 0 ){
            return 0;
        }

        return sumDivisors(i-1);

    }

    public static void main(String[] args) {

    }
}
