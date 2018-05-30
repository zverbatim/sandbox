// mind puffff .... :)

function forEach(table, action){
    for (var i in table) {
        action(table[i]);
    }
}

var table = [12, 0, 3, 4],
    sum = 0;

forEach(table, function(number){
    sum += number;
});

console.log(sum);
