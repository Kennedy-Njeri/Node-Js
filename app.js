// const fs = require('fs')
//
// //fs.writeFileSync('notes.txt', 'This file was created by Node.js and javascript!')
//
// fs.appendFileSync('notes.txt', ' and i love it')

// const add = require('./utils')
//
// console.log(add(5, 3))
const validator = require('validator')
const getNotes = require('./notes')


// or const msg = getNotes()

// console.log(msg)


console.log(getNotes("Cool"))
console.log(validator.isEmail('mistakenz@ymail.com'))