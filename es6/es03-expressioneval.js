'use strict'

let name = "peter"
let ticket = `${name} pan`;
console.log("ticket = ", ticket)

let r = () => Math.trunc( Math.random() * 100)
let poem = `
title foo
=========
one : ${ r() }
by 123: ${ r() * 123}
`
console.log("poem\n", poem)