var p = new Promise((resolve, reject) => {
    var errors = false;

    if (errors)
        resolve();
    else
        reject();
});


p.then(() => {
    console.log('success')
}).catch(() => {
    console.log('error')
});
