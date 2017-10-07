//darksky api key=  7671bf9fd7cba48c72caafbc34a96252

const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7671bf9fd7cba48c72caafbc34a96252/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        } else if (body === 'Forbidden\n') {
            callback('Please check your API key.');
        } else if (body.code === 400) {
            callback(body.error);
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    })
}

module.exports = { getWeather };