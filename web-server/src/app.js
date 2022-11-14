const path = require('path')

const express = require('express')
    // express library exports just a single function 
    // i.e. `express` is a function

console.log(__dirname); // path to the directory the app.js lives in
// console.log(__filename); // path to the file itself
console.log(path.join(__dirname, `../public`)); 
    // add strings as arguments to manipulate the main path
    // `..` goes up a folder

const app = express()

// we have one domain "app.com" & all of it will run on a single Express server
    // app.com   {homepage}
    // app.com/help   {}
    // app.com/about
// we have set-up multiple routes (/help & /about)

app.use(express.static(path.join(__dirname, `../public`))); // will define the directory which is to be exposed by the web server

app.get('', (req, res) => { // we use `app.get` here to set up our server to send a response when someone tries to go to a specific route
    // 1st argument: route name (like "/help" or "/about")
    // 2nd argument: a function (to describe what we wanna do when someone visits this specific route)
        // argument1: object containing info about incoming request from the server {called req}
        // argument2: response {contains methods to send what we wanna send to the request}
    // res.send(`Hello Express!`); // message will be displayed in the window browser
    res.send(`<h1>Weather</h1>`);
})

// app.get(`/help`, (req, res) => {
//     // res.send(`Help Page`);

//     res.send([{
//         content: `important`,
//         origin: `unknown`,
//         provider: `Vansh`
//     },{
//         since: 1997,
//         helpful: 'yes'
//     }])
//     // here, we get a JSON response
//     // express is gonna detect we've sent an object/array & automatically stringify the JSON & send it to requester
    
// })

// Challenge 01: (send simple text message to the route pages)
    // app.get(`/about`, (req, res) => {
    //     res.send(`About Page`);
    // })
    // app.get(`/weather`, (req, res) => {
    //     res.send(`Weather Data Page`);
    // })

// Challenge 02:
    // HTML response to /about
    // app.get(`/about`, (req, res) => {
    //     res.send(`<h1>About Us</h1><p>We are a Weather provinding service </p>`);
    // })

    // // JSON response to /weather
    // app.get(`/weather`, (req, res) => {
    //     res.send([{
    //         location: `Virginia`
    //     }, {
    //         foreCast: `Partly Cloudy`,
    //         temperature: 17
    //     }]);
    // })

app.listen(3000,() => {
    console.log(`Server is UP on port 3000`);
}) // starts up the server & has it listen on a specific port
    // 1st argument: Port_no.
    // 2nd argument(optional): a callback function