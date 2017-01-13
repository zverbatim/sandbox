var myPromise = Promise.resolve(123);

myPromise.then(function (val) {
    return val - 23;
}).then(function (val) {
    return val * 2;
}).then(function (val) {
    return Promise.reject(100);
}).then(function (val) {
    return val + 1;
}).then(function (val) {
    return val + 2;
}).catch(function (err) {
    console.log("error: " + err)
});