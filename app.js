// const fs = require('fs')
//
// //fs.writeFileSync('notes.txt', 'This file was created by Node.js and javascript!')
//
// fs.appendFileSync('notes.txt', ' and i love it')

// const add = require('./utils')
//
// console.log(add(5, 3))
//const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk');

const error = chalk.bold.red;
const success = chalk.bold.green.inverse;
const warning = chalk.keyword('orange');


// or const msg = getNotes()

// console.log(msg)


console.log(getNotes("Cool"))
//console.log(chalk.blue('Hello world!'));
//console.log(validator.isEmail('mistakenz@ymail.com'))
console.log(error('Error warning!'));
console.log(warning('Warning!'))
console.log(success('Success!'))