//Weather-App 07

    // A Higher Order Function is a function which takes another function as an argument or returns a function  {Baap}

    // A CallBack Function is a function we provide as an argument to another function (with the intention of having it called later on)  {Beta}

    // setTimeout uses callBack pattern & it's async
        setTimeout(() => {
            console.log(`Two Seconds are Out`);
        }, 2000)

    // forEach & filter uses callBack pattern & they're sync
        const names = ['vansh','karn','ansh','roy'];
        const shortNames = names.filter((name) => name.length <=4)
        console.log(shortNames);

        const geocode = (address,callback) => {
            setTimeout(() => {
                const data = {
                    latitude: 0,
                    longitude: 0
                }
                // return data; // it is in a nested function and the head function doesnot return this, it only returns its sub functions/return statements, not sub->sub return statements
                callback(data); //we're indirectly returning data through 1st arguement of callback
                // i.e. after 2 sec, the `callback` function will return data to the head `geocode` function as its 2nd arguement
            }, 2000)

        }
        
        geocode('Delhi',(data) => {
            console.log(data);
        });

    // Challenge:

        const add = (a,b,call) => {
            setTimeout(() => {
                const sum = a + b;
                call(sum);
            }, 2000)

        } 

        add(1,4,(sum) => {
            console.log(sum);
        })