#include <stdio.h>

int main(int argc, char *argv[]){
    int t[] = {2, 4, 6, 8};
    char state[] = "alaska";
    char *cars[] = {"tesla", "renault", "fiat"};

    printf("size t %ld\n", sizeof(t));
    printf("size of state %ld\n", sizeof(state));
    printf("second car %s\n", cars[1]);

    return 0;
}
