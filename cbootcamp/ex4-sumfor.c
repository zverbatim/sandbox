#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){

    if (argc < 2){
        printf("usage: ./ex4-sumfor <int number>\n");
        return -1;
    }

    int n = atoi(argv[1]);
    long int s = 0;
    for (int i = 0; i < n; i++) {
        s += i;
    }

    printf("the sum of 1..%d integers = %ld\n", n, s);

    long int g = (long int )(n * (n - 1) / 2);
    printf("using the gauss formula the sum is %ld\n", g);
    return 0;
}
