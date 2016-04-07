#include <stdio.h>

int printDistance(int dist, char city[]){
    printf("Distance to %s, is %d\n", city, dist);
    return 0;
}

int printRealNumbers(float fl, double dbl){
    printf("Floar number is: %f\n", fl);
    printf("Double number is: %f\n", dbl);
    return 0;
}

int main(){
    int distance = 100;
    char city[] = "Bologna";

    float fl = 2.7;
    double dbl = 99.999;

    printDistance(distance, city);
    printRealNumbers(fl, dbl);

    return 0;
}


