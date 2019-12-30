// const fs = require('fs')
//
// //fs.writeFileSync('notes.txt', 'This file was created by Node.js and javascript!')
//
// fs.appendFileSync('notes.txt', ' and i love it')

// const add = require('./utils')
//
// console.log(add(5, 3))
//const validator = require('validator')
//const chalk = require('chalk');
//const yargs = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes')


// const error = chalk.bold.red;
// const success = chalk.bold.green.inverse;
// const warning = chalk.keyword('orange');


// or const msg = getNotes()

// console.log(msg)


// console.log(getNotes("Cool"))
// //console.log(chalk.blue('Hello world!'));
// //console.log(validator.isEmail('mistakenz@ymail.com'))
// console.log(error('Error warning!'));
// console.log(warning('Warning!'))
// console.log(success('Success!'))

//console.log(process.argv)

//argv- argument vector
//const command = process.argv[2]

// if (command == 'add') {
//     console.log('Adding note')
// }

// customize yargs version
yargs.version('1.1.0')

//Create add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log("Adding a new note!")
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log("Removing the note!")
    }
})


console.log(yargs.argv)