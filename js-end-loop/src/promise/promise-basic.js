const promisePending = new Promise(function (resolve, reject) {
})

const promiseResolved = Promise.resolve('resolved')
const promiseRejected = Promise.reject('rejected')

console.log("promisePending", promisePending)
console.log("promiseResolved", promiseResolved)
console.log("promiseRejected", promiseRejected)

const firstPromise = Promise.resolve("already resolved")

//fullfillment value of secondPromise is "already resolved"
const secondPromise = Promise.resolve(firstPromise)

console.log("secondPromise", secondPromise)