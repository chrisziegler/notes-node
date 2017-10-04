const request = require('request');
const yargs = require('yargs');
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

    // let address = argv.address;
    let encodeAddr = encodeURIComponent(argv.address);
    // console.log(encodeAddr);
    // console.log(address)

//request takes 2 arguments; an options object to configure lots of info
//and a callback function - to be called once data comes back from http endpoint
request({
    // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddr}`,
    //json: true tells request it's json data and converts to js object for us
    json: true
}, (error, response, body) => {
    if(error) {
        console.log('Unable to connect to Google Servers')
    } else if(body.status === "ZERO_RESULTS") {
        console.log('Unable to find that address')
    } else if (body.status = "OK") {
         // take a look at error, response, and body with prettified printed objects
        // console.log(JSON.stringify(response, undefined, 4));
        console.log(`Address: ${body.results[0].formatted_address}`)
        console.log(`latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`longitude: ${body.results[0].geometry.location.lng}`);
    }
});