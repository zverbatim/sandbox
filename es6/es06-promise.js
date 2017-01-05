'use strict'

/**
 * Promise with simulated timeout
 * @type {Promise}
 */
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
            if (false) {
                resolve("working")
            } else {
                reject("error")
            }
        },
        500
    )
})

p.then((data) => {
    console.log("Data: ", data)
});

p.catch((err) => {
    console.log("Error: ", err)
});


console.log("==========\n")

/**
 * chaining then
 * */
let d = new Promise((resolve, reject) => {
    //throw new Error("bogus error")
    if (true) {
        resolve("success")
    } else {
        reject("failure")
    }
})

d.then((data) => {
    console.log("success 1", data)
    return "this is the return inside the promise"
})

d.then((data) => {
    console.log("success 2", data)
})

d.catch((err) => {
    console.log("Failure: ", err)
})












