// Alternative to `request` (use of a core module http or https)
    // Just like we can use "process.argv" instead of yargs

const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=f2073b03c4a593be7688505ed3d0e125&query=45,-75&units=f`

const request = http.request(url, (response) => {

    let data = ''; // we're gonna re-assign the value overtime by changing the string

    response.on(`data`, (chunk) => {
        data = data + chunk.toString();
        // console.log(chunk);
    }) // response.on is a function & it allows us to register a handler
        // 1st argument: event name (represented as a string)
        // 2nd argument: callback (gets fired when new data comes in & we get access via 1st argument: chunk)

    response.on(`end`, () => {
        const body = JSON.parse(data);
        console.log(body);
    }) // `data` callback will run multiple times, once for each chunk
        // `end` will run a single time once things are done
})

request.on(`error`, (error) => {
    console.log(`An Error Occured!:\n`, error);
})

request.end()