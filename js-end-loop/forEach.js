import {coffee} from './coffee'

// with forEach
const brands = []
coffee.forEach(c => brands.push(c.brand))
console.log("brands forEach(): ", brands)

//with reduce
console.log("brand reduce(): ", coffee.reduce((a, b) => a.concat(b.brand), []))

// push vs concat
// push is altering the array on which it is invoked
// concat is returning a new array after each

// with map
console.log("brands map():", coffee.map(c => c.brand))



