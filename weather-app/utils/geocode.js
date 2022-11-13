//Weather-App 08
    // use of a CallBack function to call the API data as many times as we want without writing the entire code every single time

    const request = require('request');

    const geocode = (address,callback) => {
        const url = 'https://us1.locationiq.com/v1/search?key=pk.421302a764d3b83e5cf4308bf4b0590f&format=json&q=' + encodeURIComponent(address);
            // encodeURIComponent converts special characters (if entered as input) into safe URL string which can be decoded by API {else sometimes special characters mean something in a URL & can change the definition for which URL is used}

            request({url, json: true }, (error, {body}) => {
                if(error){
                    callback(`Unable to connect to Location Services!`, undefined); // here, error gets the value as message; data gets value as undefined
                        // this mesage is getting sent back to the caller, & they can choose whatever they wanna do
                } else if (body.error){
                    callback(`Unable to find Location. Try another search`, undefined)
                } else {
                    callback(undefined, {
                        latitude: body[0].lat,
                        longitude: body[0].lon,
                        location: body[0].display_name
                    })
                }
            })    
    }

    module.exports = geocode
