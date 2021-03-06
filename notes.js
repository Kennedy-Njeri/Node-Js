const fs = require('fs')
const chalk = require('chalk');

const getNotes = (notes) => {
    return `Your notes are ${notes}`
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => {
       // return note.title === title
   // })
    const duplicateNote = notes.find((note) => {
        return note.title === title
    })

    if(!duplicateNote) {
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
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title === title
    })
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }
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
    listNotes:listNotes,
    readNote:readNote
}