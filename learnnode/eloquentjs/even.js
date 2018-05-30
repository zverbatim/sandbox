function ifTest(test, action) {
    if (test) action()

}

function repeat(times, action) {
    for (var i = 0; i <= times; i++) {
        action(i);
    }
}

repeat(4, function (i) {
    ifTest(i % 2 === 0 , function () {
        console.log(i + " is even");
    })
});