//Weather-App 09
    // using CallBack function same as we did in geocode

        const request = require('request');

        const foreCast = (latitude, longitude, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=f2073b03c4a593be7688505ed3d0e125&query=` + latitude + `,` + longitude;
        request({url, json: true }, (error, {body}) => {
            if(error){
                callback(`Unable to connect to Weather Services!`, undefined);
            } else if(body.error){
                callback(`Unable to find the location!`, undefined);
            } else {
                callback(undefined,
                    `${body.current.weather_descriptions[0]} \nIts is currently ${body.current.temperature} degrees celcius out.\nIt feels like ${body.current.feelslike} degrees celcius out`
                )
            }
        })
    }

    module.exports = foreCast
