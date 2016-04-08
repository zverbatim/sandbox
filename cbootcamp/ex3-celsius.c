/**
 * 
 * Convert fahrenheit to celsius
 *
 */

#include <stdio.h>
#include <stdlib.h>     // atof  

int main(int argc, char *argv[]){

    if (argc < 2) {
        printf("usage: ./ex3-celsius <fahrenheit double value>\n");
        return -1;
    }
   
    double f = atof(argv[1]);
    double c = (double) (f - 32) / 1.8;
    printf("%f Fhrenheit = %f Celsius\n", f, c);

    return 0;
}
