
const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync(__dirname +'/notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(`${__dirname}/notes-data.json`, JSON.stringify(notes))
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    }
    
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
};
const getAll = () => {
    return fetchNotes();
}
const getNote = (title) => {
    let notes = fetchNotes();
    let findNote = notes.find(note => note.title === title)
    return findNote;
}
const removeNote = (title) =>{
 let notes = fetchNotes();
 let filteredNotes = notes.filter((note) => note.title !== title);
 saveNotes(filteredNotes);
 //returns true if an actual note was removed
 return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log('----------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = { 
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}



