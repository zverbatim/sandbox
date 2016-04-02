package alg4th.misc;


public class TransposeMatrix {

    public static void main(String[] args) {
        int n = 4;
        int[][] matrix = new int[n][n];
        init(n, matrix);

        System.out.println("initial matrix");
        print(matrix);

        matrix = transpose(matrix);
        System.out.println("transpose");
        print(matrix);
    }

    public static int[][] transpose(int[][] matrix) {
        int n = matrix.length;
        int[][] t = new int[n][n];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                t[j][i] = matrix[i][j];
            }
            System.out.println();
        }
        return t;
    }

    private static void print(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void init(int n, int[][] matrix) {

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = (int) (Math.random() * 10);
            }
            System.out.println();
        }
    }
}
