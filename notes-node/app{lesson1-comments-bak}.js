console.log('starting app.js...');

//needed to add no-op callback for node 7
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
console.log(_.isString(true));
console.log(_.isString('Andrew'));

// works almost like a Set
var filteredArray = _.uniq(['Chris', 1, 'Chris', 1, 2, 3, 4]);
console.log(filteredArray);
// fs.appendFile(__dirname + '/greeting.txt', 'Hello World! \nHow are you doin\'?', () => {});
var user = os.userInfo();
// console.log(user.username) //Chris
//or do something useful with your callback
var age = notes.age();
fs.appendFile(`${__dirname}/greeting.txt`, `\nHello ${user.username}! \nYou are ${age}.`, (err) => {
    if (err) {
        console.log('unable to write to file');
    }
});

//create a variable called res and set it equal to the return result of addNote.
const res = notes.addNote();
const addTwo = notes.add(7, -3);
console.log(res + ', ' + 'Results:', addTwo);

//option two
// fs.appendFileSync(__dirname + '/greeting3.txt', 'Hello World! \nHow are you doin\'?');