//Weather-App 01
    // to understand difference between sync & async programming in NodeJS
        // https://blog.risingstack.com/node-hero-async-programming-in-node-js/

    // in sync prog. , every code is executed in order/sequential manner
        // i.e. if a code1 is gonna taking 10 sec to execute, then only after it's execution will the code2 (which comes after code1) be executed

    // in async prog. , code1 (10sec) will be executing in background while the code2, code3, ... will start executing simultaneously
    // e.g. of async prog.:
    console.log(`Starting`);

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
    }
//Weather-App 02
    // Call Stack (LI-FO) keeps track of the individual functions that are executing
    // all the callback/timer functions go to NodeAPI, where they wait for their time to come, while the programs after them continue to execute in CallStack
    // once their time has come, they get pushed in CallBack Queue (FI-FO), where Event Loop pushes them in CallStack to get executed
    // No Asynchronous CallBacks are ever going to run the main function is done
        // i.e the EVENT LOOP can't run any async callbacks until the callstack is empty


