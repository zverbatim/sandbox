#include <stdio.h>

int main() {
    double n = 100.13;
    int i = 12;
    long l = 1024L * 1024L * 1024L * 4048L * 8096L;
    char null_byte = '\0';

    printf("A long number %ld\n", l);

    printf("A rate %f\n", i/n);

    printf("Operation with char %ld%%",  i * null_byte / l);

    return 0;
}
