var square = x => x * x;
//other options Math.pow(x, 2)
//x ** 2 the exponentiation operator
console.log(square(9));

//Arrow functions do not bind a this keyword
// var user = {
//     name: 'Chris',
//     sayHi = () => {
//         console.log(`${this} Hi`)
//     }
// }
var user = {
    name: 'Chris',
    sayHi: function() {
        console.log(`Hi ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
    }
}

user.sayHi();
user.sayHiAlt(1, 2, 3);
