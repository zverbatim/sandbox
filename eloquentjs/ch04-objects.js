/**
 Test the code
 */

var bottles= [];

var stock = function(brand, volume){
    bottles.push({
        brand: brand,
        volume: volume
    })
};

stock("Ice mountain", 1);
stock("Poland spring", 110);

console.log(bottles);