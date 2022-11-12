//Weather-App 09
    // using CallBack function same as we did in geocode

        const request = require('request');

        const foreCast = (latitude, longitude, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=f2073b03c4a593be7688505ed3d0e125&query=` + latitude + `,` + longitude;
        request({ url: url, json: true }, (error, response) => {
            if(error){
                callback(`Unable to connect to Weather Services!`, undefined);
            } else if(response.body.error){
                callback(`Unable to find the location!`, undefined);
            } else {
                callback(undefined, {
                    weather: response.body.current.weather_descriptions[0],
                    temperature: response.body.current.temperature,
                    time: response.body.location.localtime,
                    isItDay: response.body.current.is_day
                })
            }
        })
    }

    module.exports = foreCast
