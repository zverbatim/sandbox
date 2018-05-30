var duck = {
    quack: function () {
        console.log("make some noise");
    }    
};

console.log(duck.quack());

// won't work 
//console.log(duck.hasOwnProperty('quack');

// inherit from Object property
var object = Object.create
object.quack = function() {
    console.log('quack');
};

console.log( 'inherited from Object: ' + object.hasOwnProperty('quack') );

// use call with an altered _this_
console.log( 'using call: ' + Object.prototype.hasOwnProperty.call(object, 'quack'));

console.log( 'in usage' + 'quack' in object);