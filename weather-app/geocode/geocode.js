const request = require('request');

module.exports.geocodeAddress = (address) => {
    let encodeAddr = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddr}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            console.log('Unable to connect to Google Servers')
        } else if(body.status === "ZERO_RESULTS") {
            console.log('Unable to find that address')
        } else if (body.status = "OK") {
            console.log(`Address: ${body.results[0].formatted_address}`)
            console.log(`latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
}

// module.exports.geocodeAddress = geocodeAddress;

//saem as module.exports = { geocodeAddress }     and
//   module.exports.geocodeAddress = (address) => {
//      ...
// NOTE the circumstance where the syntax module.exports = geocodeAddress; will work
// from exercism files I worked on - perhaps with a class or IIFE (fully contained module) 
// doesn't work here
    

