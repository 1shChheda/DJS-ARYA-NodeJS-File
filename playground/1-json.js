//Lecture 8 (S3-04)
    
    const fs = require('fs');
        // const book = {
        //     title: `Harry Porter`,
        //     author: `J K Rowling`,
        //     DOB: `12-01-22`
        // }
        // const arr = ["John", "Peter", "Sally", "Jane"];
//to convert the JS Object/Array to JSON (which is kind-of string)
    // because FS Core Module only knows how to work with string data

// JSON.stringify()
    // Convert a JavaScript object into a string
        // const bookJSON = JSON.stringify(book);
        // console.log(bookJSON);
    
    // Convert a JavaScript array into a string
        // const arrJSON = JSON.stringify(arr);
        // console.log(arrJSON);

// JSON.parse()
        //Reverse of JSON.stringify
            // const bookJSONParsed = JSON.parse(bookJSON); // note: bookJSONParsed = book
            // console.log(bookJSONParsed);
            // const arrParsed = JSON.parse('["Ford", "BMW", "Audi", "Fiat"]'); // converts stringified Array into JS Array
            // console.log(arrParsed);
//Note:
    // Date objects are not allowed in JSON
    // Functions are not allowed in JSON
    // If you need to include a date/function, write it as a string.

// JSON data Storing in a .json file
    // fs.writeFileSync('1-json.json',bookJSON);
    // const dataBuffer = fs.readFileSync('1-json.json'); // return value won't be a string, rather be a BUFFER (binary data)
        // console.log(dataBuffer.toString()); 
    // const dataJSON = dataBuffer.toString(); // toString will give us the proper String format
    // const data = JSON.parse(dataJSON); // to convert string format back to JavaScript Object format
    // console.log(data.DOB); // finally, we can access property from the Object

    //Challenge 8
        fs.readFileSync('1-json.json');
        const data = JSON.parse(fs.readFileSync('1-json.json').toString());
        data.name = "VANSH";
        data.age = 19;
        console.log(data);
        const testDataJson = JSON.stringify(data);
        fs.writeFileSync('1-json.json',testDataJson);
