Syntax notes
============

## Keywords
keyword| definition
 --- | ---
auto | give a local var a local lifetime
const | var can not be modified
enum | set of int constants
extern | declare identifier as defined externally
goto | jump to label
register | var will be stored in the cpu register
signed | signed modifier for integer data types
sizeof | see the data size 
static | preserve var value after its scope exit
struct | combine vars into a single record
union | start union statement
unsigned | an unsigned modifier for integer data types
volatile | declare a var that can be modified somewhere else

## Syntax format
```
# int consts
enum {CONST1, CONST2, ...} NAME;

# goto
if (ERROR){
  goto fail;
}

fail:
    FAIL_CODE;

# function
int name(var0, var1){
    CODE
    return 0;
}

struct NAME {
    ELEMENTS;
} [VARIABLE_NAME];

typedef struct [STRUCT_NAME] {
    ELEMENTS;
} IDENTIFIER;

union NAME {
    ELEMENTS;
} [VAR_NAME]

```
