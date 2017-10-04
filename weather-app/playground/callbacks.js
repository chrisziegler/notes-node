//contrived example - no callback needed
// could simply return the user
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vaikram'
    };
    setTimeout(() => {
        //callback needs our userObject as an argument or it will return undefined
        callback(user);
    }, 3000);

}


//calling getUser - passing in the user id and userObject as the callback function
//getUser expects 2 arguments, an id and a callback
//the second argument is a callback function
getUser(31, (userObject) => {
    console.log(userObject);
});