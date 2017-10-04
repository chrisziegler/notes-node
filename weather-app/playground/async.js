console.log('starting app');

setTimeout(() => {
    console.log('inside of callback');
}, 2000);

setTimeout(() => {
    console.log('no delay in 2nd setTimeout callback')
}, 0);

console.log('finishing app');