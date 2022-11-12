//Weather-App 01
    // to understand difference between sync & async programming in NodeJS
        // https://blog.risingstack.com/node-hero-async-programming-in-node-js/

    // in sync prog. , every code is executed in order/sequential manner
        // i.e. if a code1 is gonna taking 10 sec to execute, then only after it's execution will the code2 (which comes after code1) be executed

    // in async prog. , code1 (10sec) will be executing in background while the code2, code3, ... will start executing simultaneously
    // e.g. of async prog.:
/*    console.log(`Starting`);

    //setTimeout allows us to run some code after a specific amount of time has passed
        setTimeout(() => {
            console.log(`2 second timer`)
        }, 2000);

        setTimeout(() => {
            console.log(`0 second timer`)
        }, 0)

    console.log(`Ending`);
    console.log(`LOL, still waiting for the timer texts?\nhere,watch some numbers:`);
    for(let i=0;i<5;i++){
        console.log(i);
    }*/
//Weather-App 02
    // Call Stack (LI-FO) keeps track of the individual functions that are executing
    // all the callback/timer functions go to NodeAPI, where they wait for their time to come, while the programs after them continue to execute in CallStack
    // once their time has come, they get pushed in CallBack Queue (FI-FO), where Event Loop pushes them in CallStack to get executed
    // No Asynchronous CallBacks are ever going to run the main function is done
        // i.e the EVENT LOOP can't run any async callbacks until the callstack is empty

//Weather-App 03 & 04
    // http://api.weatherstack.com/current?key=value&name=vansh
    
        const request = require('request');

        // const url = 'http://api.weatherstack.com/current?access_key=f2073b03c4a593be7688505ed3d0e125&query=37.8267,-122.4233';

        // request({ url: url }, (error, response) => {
        //     const data = JSON.parse(response.body);
        //     console.log(data.current);
        // });

    // Adding a json parser (so that the response body is automatically converted into an object)    
        // request({ url: url, json: true }, (error, response) => {
        //     console.log(response.body.current);
        // })

    //to change the units, we add another key-value pair to the URL, in accordance with the documentation given on weatherstack site
        
        // const url = 'http://api.weatherstack.com/current?access_key=f2073b03c4a593be7688505ed3d0e125&query=37.8267,-122.4233&units=f';

    // Challenge 01
    // request({ url: url, json: true }, (error, response) => {
    //     if(error){ // for a low level OS error
    //         console.log(`Unable to connect to weather services!`);
    //     } else if(response.body.error){
    //         console.log(`Unable to find the location!`);

    //     } else {
    //         console.log(`${response.body.current.weather_descriptions[0]} Its is currently ${response.body.current.temperature} degrees fahrenheit out.\nIt feels like ${response.body.current.feelslike} degrees fahrenheit out`);
    //     }
    // })

//Weather-App 05
    // GeoCoding : taking an address like Mumbai, Maharashtra & converting it to lat & long coordinate pairs
    // Address -> Lat/Long -> giving weatherstackAPI the Lat/Long -> get Weather!

        // note: I've used LocationIQ API here instead of MapBox, sinced it asked for biling credentials at the signup page (even for free signup)

    // const geocodeURL = 'https://us1.locationiq.com/v1/search?key=pk.421302a764d3b83e5cf4308bf4b0590f&format=json&limit=1&q=Delhi';

    // request({ url: geocodeURL, json: true }, (error, response) => {
    //     if(error){ // for a low level OS error
    //         console.log(`Unable to connect to location services!`);
    //     } else if(response.body.error){
    //         console.log(`Please Enter a Valid Location Name!`);

    //     } else {
    //     let latitude = response.body[0].lat;
    //     let longitude = response.body[0].lon;
    //     console.log(`The latitude of LA is: ${latitude}`);
    //     console.log(`The longitude of LA is: ${longitude}`);
    //     }
    // });

//Weather-App 06
    // Adding Error Option when any type of error occurs in connectivity between our app & API or an invalid User Input is given

//Weather-App 07
    // CallBack function understanding (./playground/4-callbacks.js)

//Weather-App 08
    // exported geocode from another file (./utils/geocode.js)

    const geocode = require('./utils/geocode');

    geocode(`Armenia`, (error, data)  => {
        console.log(`Error`,error);
        console.log(`Data`,data);
    });
