// source : https://egghead.io/lessons/javascript-chaining-the-array-map-and-filter-methods

var stocks = [
    {ticket: 'A', price: 100},
    {ticket: 'B', price: 50},
    {ticket: 'C', price: 150},
];

var large = 
    stocks
        .filter( function (s) {
            return s.price > 99;
        })
        .map( function (s) {
            return s.ticket;
        });
console.log("all stocks: " + 
    stocks.ticket);
/*        .forEach(function (s){
            return s.ticket;
        })
    );*/
console.log("price greater than 99: " + large);
