const fs = require('fs')
const chalk = require('chalk');

const getNotes = (notes) => {
    return `Your notes are ${notes}`
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"))
    } else {
        console.log(chalk.red.inverse("Note Title taken"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note Removed"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("No Note Found"))
    }


}

const listNotes = () => {
    console.log(chalk.inverse("Your Notes"))
}


const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes
}