// Vid01
    // AJAX : Asynchronous JavaScript And XML

        // AJAX just uses a combination of:
            // A browser built-in XMLHttpRequest object (to request data from a web server)
            // JavaScript and HTML DOM (to display or use the data)

        // AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. 
        // This means that it is possible to update parts of a web page, without reloading the whole page.

    // const request = new XMLHttpRequest();

// Vid02
    // To send a request to a server, we use the open() and send() methods
        // request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        // request.send();
        // SYNTAX: open(method, url, async)
            // method: the type of request: GET or POST
            // url: the server (file) location
            // async: true (asynchronous) or false (synchronous)

// Vid03
    /* request.addEventListener('readystatechange', () => { // statechange means that request is going thr' these different phases of request (4/5 in total)
        // 0 : UNSENT           {Client has been created. open() not called yet}
        // 1 : OPENED           {open() has been called}
        // 2 : HEADERS_RECEIVED {send() has been called, and headers and status are available}
        // 3 : LOADING          {Downloading; responseText holds partial data}
        // 4 : DONE             {The operation is complete}
        // console.log(request, request.readyState);

        // status codes and readyState
        if(request.readyState === 4 && request.status === 200) {
            console.log(request.responseText); // The responseText property returns the server response as a JavaScript string
        }

        else if(request.readyState === 4) {
            console.log(`ERROR OCCURED!`);
        }
    }); */

// Vid04 & Vid05
    // CallBack Function {like we did in ../playground/4-callbacks.js}
    // Using JSON data {i.e. parsing JSON string to access object properties}
    /*const getToDo = (callback) => {
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                callback(undefined, JSON.parse(request.responseText));
            }
    
            else if(request.readyState === 4) {
                callback(`Could Not Fetch Data`, undefined);
            }
        });
    };


    console.log(`Starting 01`);
    console.log(`Starting 02`);
    getToDo((error, data) => {
        console.log(`callback fired!`);
        // console.log(error, data);

        if(!error){
            console.log(data);
        } else {
            console.log(error);
        }
    });
    console.log(`Ending`);*/

// Vid06
    // CallBack HELL
    // fetch data from multiple JSON files, one after the other 

    // const getToDo = (resource, callback) => {

    //     const request = new XMLHttpRequest();

    //     request.open('GET',resource);
    //     request.send();

    //     request.addEventListener('readystatechange', () => {
    //         if(request.readyState === 4 && request.status === 200) {
    //             callback(undefined, JSON.parse(request.responseText));
    //         }
    
    //         else if(request.readyState === 4) {
    //             callback(`Could Not Fetch Data`, undefined);
    //         }
    //     });

    //     request.open('GET',resource);
    //     request.send();

    // };

    // kinda NESTED CallBack Functions {like we did in ../weather-app/app.js:128}

        // getToDo('todos/mario.json', (error, data) => {
        //     console.log(data);
        //     getToDo('todos/luigi.json', (error, data) => {
        //         console.log(data);
        //         getToDo('todos/peach.json', (error, data) => {
        //             console.log(data);
        //         });
        //     });
        // });

// Vid07

    // promise example
    const getSomething = () => {
        

        return new Promise((resolve, reject) => {  // it is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
            // resolve('Sample Data');
            reject('Sample Error');
        });
    };
    // when we resolve (or reject) something in a Promise, it fires the CallBack fn. inside the `then()` method
        // that CallBack fn. takes the data that we passed through the resolve fn.

        // getSomething().then((data) => {
        //     console.log(data)
        // }, (error) => {
        //     console.log(error);
        // });

    // neater way: 
        getSomething().then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })


    //let's apply on the main getToDo:
    // const getToDo = (resource) => {

    //     return new Promise((resolve, reject) => {

    //         const request = new XMLHttpRequest();

    //         request.open('GET',resource);
    //         request.send();

    //         request.addEventListener('readystatechange', () => {
    //             if(request.readyState === 4 && request.status === 200) {
    //                 resolve(JSON.parse(request.responseText));
    //             }
        
    //             else if(request.readyState === 4) {
    //                 reject(`Could Not Fetch Data!`);
    //             }
    //         });

    //         request.open('GET',resource);
    //         request.send();

    //     })
    // }; 

    // getToDo('todos/mario.json').then(data => {
    //     console.log(`Promise 1 Resolved!`,data);
    //     return getToDo('todos/luigi.json')
    // }).then(data => {
    //     console.log(`Promise 2 Resolved!`,data);
    //     return getToDo('todos/peach.json')
    // }).then(data => {
    //     console.log(`Promise 3 Resolved!`,data);
    // }).catch(error => {
    //     console.log(`Promise Rejected!`, error);
    // });

// Vid09/10/11
    // Fetch API
    // The fetch() method starts the process of fetching a resource from a server
    // The fetch() method returns a Promise that resolves to a Response object
        // fetch('todos/peach.json')
        // .then((response) => {
        //     console.log(`Resolved!`, response);
        //     return response.json(); // this returns the JSON data we're looking for.
        // })
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch((error) => {
        //     console.log(`Rejected!`, error)
        // })
    
    const getToDo = async () => { // a async fn. always returns a PROMISE

        const response = await fetch('todos/luigi.json'); // awaits stores javascript (i.e. stops it from assigning a value to this variable) until the promise has resolved
        if (response.status !== 200) {
            throw new Error(`Cannot fetch the data`); // the promise returned by the main async fn. is REJECTED
        }
        const data = await response.json();
        // console.log(data);
        return data;

    };
    getToDo()
        .then((data) => { console.log(`Resolved!`, data); })
        .catch((error) => { console.log(`Rejected!`, error.message) }) // will catch both errors {whether it be a typo is JSON file or a typo in the url in fetch()}


