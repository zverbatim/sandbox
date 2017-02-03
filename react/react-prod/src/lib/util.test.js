import {partial, pipe} from "./utils";

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c
const inc = (a) => a + 1
const dbl = (a) => a * 2

test('applies one argument to the function', () => {
    const inc = partial(add, 1)
    const result = inc(2)
    expect(3).toEqual(result)

})

test('applies one argument to the function', () => {
    const inc = partial(addThree, 1, 2)
    const result = inc(2)
    expect(5).toEqual(result)
})

test('pipe with 3 functions', () => {
    const pipeline = pipe(add, inc, dbl, inc)
    const result = pipeline(1, 2)
    expect(9).toEqual(result)

})