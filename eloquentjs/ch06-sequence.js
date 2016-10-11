function ArraySeq(a) {
    this.array = a;
}

function RangeSeq(start, end) {
    this.start = start;
    this.end = end;
}

Object.defineProperty(RangeSeq.prototype, "array", {
    get: function () {
        var array = [];
        for (var i = this.start; i <= this.end; i++) {
            array.push(i);
        }
        return array;
    }
});

function first(a, n) {
    return a.filter(function (_, index) {
        return index < n
    })
}

function log(item) {
    console.log(item);
}

function logFive(a) {
    first(a.array, 5).forEach(log)
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));