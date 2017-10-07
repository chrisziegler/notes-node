const request = require('request');

const geocodeAddress = (address, callback) => {
    let encodeAddr = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddr}&key=AIzaSyCnCkQQBnk7cbkjPtVqBgR3wTVVkjBwsRg`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 4));
        if(error) {
            //only uses 1st argument provided by default 2nd (results) is unneeded and will be undefined
            callback('Unable to connect to Google Servers')
        } else if(body.status === "ZERO_RESULTS") {
            callback('Unable to find that address')
        } else if (body.status = "OK") {
            //here first argument needs to be undefined since we're not using errorMessage
            //2nd will be a the results object we define
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;

//saem as module.exports = { geocodeAddress }     and exporting the arrow function itself
//   module.exports.geocodeAddress = (address) => {
//      ...
// NOTE the circumstance where the syntax module.exports = geocodeAddress; will work
// from exercism files I worked on - perhaps with a class or IIFE (fully contained module) 
// doesn't work here
    

