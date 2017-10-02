// const obj = {
//     name: 'Chris',
//     age: 50
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj)

// const personString = '{"name": "Chris", "age": 50}';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'new some title',
    body: 'new some body'
}
var originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);
fs.writeFileSync(`${__dirname}/notes.json`, originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);