/**
 * tutorial: https://spring.io/understanding/javascript-promises
 */
var sleep = require('sleep');

console.log("1", new Date());
var promise = new Promise((resolve, reject)=> {
    // simulate the async
    sleep.sleep(2)

    // the usual test to determine that async passed
    if (1 > 0) {
        return resolve("it worked")
    } else {
        reject(new Error("it failed"))
    }
});

promise.then((result) => {
        console.log(result)
    }, (err=> {
        console.log(err)
    })
);

console.log("2", new Date());