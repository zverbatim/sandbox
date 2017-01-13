/**
 *The Promise.race() method can be used to choose the quickest source when there are two similar sources of the same data.
 */
var promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in one second");
    },1000) //returns a resolved promise after 1 second
});

var promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in five seconds");
    },5000) //returns a resolved promise after 5 seconds
});


Promise.race([promise1,promise2]).then(function(result) {
    console.log(result) // logs "finished in two seconds" because promise1 resolved first
}).catch(function(error){
    console.log(error)
});
