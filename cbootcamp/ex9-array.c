#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int printArgv(int argc, char *argv[]){
   
    char *message = ""; 
    
    for (int i=0; i< argc; i++){
        char *result=malloc(strlen(message) + 1 + strlen(argv[1]) + 1);
        strcpy(result, message);
        strcat(result, " ");
        strcat(result, argv[i]);
        message = result;
    }

    printf("Arguments are: %s\n", message);
    return 0;
}

int main(int argc, char *argv[]){

    if( argc != 2){
        printf("usage: ./ex9-array <int number>\n");
    } else if ( atoi(argv[1]) < 1){
        printf("usage: ./ex9-array <int number>\n");
        printf("enter a numberi\n");
    } else {
        printArgv(argc, argv);
    }

    // init the array
    int n = atoi(argv[1]);
    printf("n = %d\n", n);

    // TODO figure out why in numbers[n] does not work;   
    int numbers[10] = {0};

    for (int i=0; i<n; i++){
       printf("%d\t", numbers[i]); 
    }

    printf("\n");
    
    return 0;
}
