const yargs = require('yargs'); 
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

//grab user input arguments from yargs to encode for use in URL
const geocode_key = process.env.GEOCODE_KEY;
var encodeAddr = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddr}&key=${geocode_key}`;

// get our lng/lat from google geodcode appi based on user input
// axios parses JSON, returns a Promise
axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Address not found')
    } 
    const weather_key = process.env.WEATHER_KEY;
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${weather_key}/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, and it feels like ${apparentTemperature}`);

    

})
.catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API server')
    } else {
        console.log(e.message);
    }
})