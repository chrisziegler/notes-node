// const fs = require('fs');
// const _ = require('lodash'); 
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// var command = process.argv[2];
const command = argv._[0];

// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

if(command === 'add') {
     let note = notes.addNote(argv.title, argv.body);
     if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('title already in use');
    }
} else if (command === 'list') {
    //since not returns an array of objects, instead of single object
    //cannot simply combine both functions with logNote()
    let note = notes.getAll();
    console.log('List of notes\n--------------------------');
    for (let prop in note) {
        let item = note[prop]; //so note[0], note[1], etc
        console.log(`title: ${item.title}, body: ${item.body}`);
    }
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
    
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command not recognized')
}

