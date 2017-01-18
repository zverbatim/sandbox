var promise1 = Promise.resolve('hello');
var promise2 = Promise.resolve({age:2,height:188})
var promise3 = 42; //normal values work with Promise.all() too

Promise.all([promise1,promise2,promise3]).then(function(result) {

    console.log(result) //logs the array ["hello",{age:2,height:188},42]

}).catch(function(error){

    console.log(error)

});