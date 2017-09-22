
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
 console.log(notes);
 let filteredNotes = notes.filter((note) => note.title !== title);
 console.log(filteredNotes);
 saveNotes(filteredNotes);
 return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    // //use 1st section if  logNote to handle both read and list
    // // console.log(note.length)
    // //use lodash to check type - if array of objects, or single object?
    // console.log(note)
    // // when using list command to getAll - multiple titles - note returns
    // // [ { title: 'note7', body: 'body7' },
    // // { title: 'note8', body: 'body8' },
    // // { title: 'hello', body: 'world' } ]
    // //ADD THIS EXAMPLE TO EXERCISM ITERATING OBJECTS/JSON ASIDE
    // console.log('List of notes\n--------------------------');
    // for (let prop in note) {
    //     let item = note[prop]; //so note[0], note[1], etc
    //     //just selecting the objects with this one
    //     //get the values off each item contained on the objects in the array we're
    //     //iterating through. Better without the 'title' & 'body' labels here.
    //     console.log(`title: ${item.title}, body: ${item.body}`);
    // }


    //complete old code
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



