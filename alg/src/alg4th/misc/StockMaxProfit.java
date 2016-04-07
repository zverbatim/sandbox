package alg4th.misc;

import alg4th.util.ArrayUtil;

/**
 * Each day the stock goes up and down.
 * Calculate the maximum possible profit. Sell must occur after buy
 * <p>
 * Solution #1: Divide and conquer.
 */
public class StockMaxProfit {

    ArrayUtil au;

    public StockMaxProfit(ArrayUtil au) {
        this.au = au;
    }

    private int maxProfit(Integer[] t) {
        int n = t.length;
        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return Math.max(t[0], 0);
        }

        // init the let and right array
        Integer[] leftT = new Integer[n / 2];
        Integer[] righT = new Integer[n / 2];
        for (int i = 0; i < n / 2; i++) {
            leftT[i] = t[i];
        }
        for (int i = n / 2; i < n; i++) {
            righT[i] = t[i];
        }

        int left = maxProfit(leftT);
        int right = maxProfit(righT);

        // min in left half
        int min = 0;
        for (int i = 0; i < n / 2; i++) {
            min = Math.min(t[i], min);
        }

        // max in right half
        int max = t[n / 2];
        for (int i = n / 2; i < n; i++) {
            max = Math.max(t[i], min);
        }

        int midProfit = max - min;
        midProfit = Math.max(midProfit, Math.max(left, right));
        return midProfit;
    }

    public static void main(String[] args) {
        StockMaxProfit stockMaxProfit = new StockMaxProfit(new ArrayUtil());
        Integer[] t = {44, -78, -28, -18, 80, -7, -4, -58, 35, -7};
        stockMaxProfit.au.print(t);

        System.out.println("Max profit" + stockMaxProfit.maxProfit(t));
    }

}
