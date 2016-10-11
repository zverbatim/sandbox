// object + methods

// 1:
var coffee = {};
coffee.ready = function (s) {
    console.log("I'm a coffee. Ready status: ", s);
};

coffee.ready(true);


// 2:
var drink = {
    type: "tea",
    ready: function (s) {
        console.log("I'm a ", this.type, ' and my status: ', s)
    }
};
drink.ready(false);


// 3:
function ready(s) {
    console.log("I'm a", this.type, "The status is", s);
}
var liquid = {
    type: "chai",
    ready: ready
};
liquid.ready(false);

// 4:
ready.apply({type: "watter"}, ["Done"]);
ready.call({type: "watter"}, "Done");


// prototypes
var protoRabbit = {
    speak: function (line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

// constructor - "using the new" (for convenience Upper Case)
function Animal(type, name) {
    this.type = type;
    this.name = name;
    this.speak = function () {
        console.log("I'm a", type, "and my name is", name);
    }
}

var rabbit = new Animal("rabbit", "Alfredo");
rabbit.speak();

// add a new function to the prototype

Animal.prototype.move = function(){
    console.log("The", this.type, "is jumping");
};

rabbit.move();