
const addNote = (title, body) => {
    console.log('Adding note ', title, body);
};
const getAll = () => {
    console.log('Getting all notes.')
}
const getNote = (title) => {
    console.log('Read a note.', title)
}
const removeNote = (title) => {
    console.log('Delete a specific note.', title)
}


module.exports = { 
    addNote,
    getAll,
    getNote,
    removeNote
}


