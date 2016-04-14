package alg4th.misc;

/**
 * Place the < 0 to the left and the >0 to the right
 */
public class NegativeLeftPozitiveRight {

    public static void main(String[] args) {
        int[] a = {1, -2, -3, -4, 5, -6, 7, -8, 9, -10, -11, -12, 20};
        int left = 0;
        int right = a.length - 1;
        while (left < right) {

            while (a[left] < 0 && left < a.length - 1) {
                left++;
            }

            while (a[right] > 0 && right > 0) {
                right--;
            }

            if (left > right) {
                break;
            }

            int temp = a[left];
            a[left] = a[right];
            a[right] = temp;
        }

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + "\t");
        }
        System.out.println();
    }
}
