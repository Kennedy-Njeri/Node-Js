const fs = require('fs')

const getNotes = function (notes) {
    return `Your notes are ${notes}`
}

const addNote = function (title, body) {
    const notes = loadNotes()
    notes.push({
        title:title,
        body: body
    })
    console.log(notes)

}

const loadNotes = function () {
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
    addNote: addNote
}