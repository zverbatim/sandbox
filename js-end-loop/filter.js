import {coffee} from "./coffee";

const inStock = coffee.filter(c => c.stock)
console.log("coffee in stock: ", inStock)

// just the brand
const inStockBrands = coffee
    .filter(c => c.stock)
    .map(c => c.brand)

console.log("coffee in stock brands: ", inStockBrands)