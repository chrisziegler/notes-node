const request = require('request');
const yargs = require('yargs');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            //always parse the a or address argument as a string
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
    // take a look at error, response, and body with prettified printed objects
    // console.log(JSON.stringify(response, undefined, 4));
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`latitude: ${body.results[0].geometry.location.lat} longitude: ${body.results[0].geometry.location.lng}`);
});