#include <stdio.h>

int main(int argc, char *argv[]){

    // how many bytes each data type takes
    printf("a char is %ld bytes\n", sizeof(char));
    printf("a int is %ld bytes\n", sizeof(int));
    printf("a long int is %ld bytes\n", sizeof(long));
    printf("a short int is %ld bytes\n", sizeof(short int));
    printf("a unsigned int is %ld bytes\n", sizeof(unsigned int));
    printf("a signed int is %ld bytes\n", sizeof(signed int));
    printf("a float is %ld bytes\n", sizeof(float));
    printf("a double is %ld bytes\n", sizeof(double));
    printf("a long double is %ld bytes\n", sizeof(long double));
   
    // base 8 and 16
    printf("\n06347 from octal to decimal is %d\n", 06347);
    printf("0x3af from hex to decimal is %d\n", 0x3af);
    printf("2016 in octal  0%o\n", 2016);
    printf("2016 in hex is ox%x\n", 2016);

    return 0;


}
