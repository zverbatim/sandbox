import {coffee2} from "./coffee";

const concatAll = (array) => {
    const result = []
    console.log("this = ", this)
    array.forEach(levelOne => {
        levelOne.forEach((levelTwo => {
            result.push(levelTwo.brand + " " + levelTwo.price)
        }))
    })
    return result
}

const c = concatAll(coffee2)
console.log("c = ", c)

/*
 coffee2.forEach( levelOne=> {
 levelOne.forEach((levelTwo =>{
 console.log(levelTwo.brand + " " + levelTwo.price)
 }))
 })
 */