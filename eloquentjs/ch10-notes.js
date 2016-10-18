var Person = function(name){
    this.name = name;
    this.greet = function () {
        return "hello " + this.name;
    }
};

var person = {
    firstName : 'Boaz',
    lastName : 'Segnder',
    greet : function(greeting, punctuation) {
        console.log( greeting + ', ' + this.firstName + punctuation );
    }
};

// data type
console.log("typeof person", typeof person);
console.log("typeof Person", typeof Person);
console.log("typeof new Person(\"sdf\")", typeof new Person("sdf"));

console.log(new Person("Vasea").greet());


var sayIt = person.greet;

sayIt.apply( person, [ 'Hello', '!!1!!1' ] );


console.log("'' == true\t\t", '' == true);
console.log("undefined == true\t", undefined == true);
console.log("isNaN(true)\t\t", isNaN(true));
console.log("null == true\t\t", null == true);

console.log( "0.0001 + 0.0002 = ", 0.0001 + 0.0002 );