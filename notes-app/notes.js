//Lecture 9 (S3-05)
    const fs = require('fs');

    const chalk = require('chalk');

    const addNote = (title,body) => {
        const notes = loadNotes(); // brings the pre-exisitng data from JSON to JS

        const index = notes.findIndex((note,index) => note.title === title)
        // const index = notes.findIndex(function(note,index){
        //     return note.title === title
        // })

        // const duplicateNotes = notes.filter((note) => note.title === title) // if true, the duplicateNotes array will have 1 element, else 0 elements
        // const duplicateNotes = notes.filter(function(note){
        //     return note.title === title // if true, the duplicateNotes array will have 1 element, else 0 elements
        // })

    //filter() will go through every array element,even after finding a duplicate, it won't stop & proceed to search for other duplicates, which aren't there (obviously), so this method kinda lags when we're searching through a big notes list

    //Instead, we'll use find(), which returns the value of the first element that passes a test, & then stops.
        const duplicateNote = notes.find((note) => note.title === title)

        // console.log(duplicateNote); // to check within the duplicateNote, where is error occuring
        debugger

        if (!duplicateNote){
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log(chalk.blue.bgYellowBright.inverse.bold('New Note ADDED!'));
        } else{
            console.log(chalk.black.bgRed.inverse.bold.italic(`Note Title TAKEN! at position ${index+1} in List`));
        }

    }

    const saveNotes = (notes)  => {
        const notesDataJSON = JSON.stringify(notes);
        fs.writeFileSync('1-notes.json',notesDataJSON); // sends the new appended data from JS to JSON
        // console.log(notes);
    }

    const loadNotes = () => {
        try{ //any code in 'try' block throws an error, that code is immediately going to stop, & it's going to run 'catch' block instead 
            const data = JSON.parse(fs.readFileSync('1-notes.json').toString()); // bringing the data in JS Object/Array form (from storage, to over here)
            return data
        } catch(e) {
            return []

        }


    }

    const removeNote = (title) => {
        const notes = loadNotes();
        
        const index = notes.findIndex((note,index) => note.title === title)
        // const index = notes.findIndex(function(note,index){
        //     return note.title === title
        // })

        if(index === -1){
            console.log(chalk.bgRed.bold(`Note does not Exist!`));
        } else {
            console.log(chalk.bgGreenBright.bold(`Note: "${title}" removed from Position ${index+1}`));
        }

        const notesToKeep = notes.filter((note) => note.title !== title)
        // const notesToKeep = notes.filter(function(note){
        //     return note.title !== title;
        // })
        saveNotes(notesToKeep);

    }

    const listNotes = () => {
        const notes = loadNotes();

        console.log(chalk.yellow.inverse.bold(`Your Notes :`));

        notes.forEach((note) => {
            console.log(chalk.bgMagenta(note.title));
        })
    }

        const readNote = (title) => {
            const notes = loadNotes();
            const searchNote = notes.find((note) => note.title === title);

            if(searchNote !== undefined){
                console.log(chalk.bgCyanBright.bold(`"${searchNote.title}"`));
                console.log(chalk.yellowBright.italic(`${searchNote.body}`));

            } else {
                console.log(chalk.bgRed.bold(`Note does not Exist!`));
            }
        }


    module.exports = {
        addNote: addNote,
        removeNote: removeNote,
        listNotes: listNotes,
        readNote: readNote
    }
    
//Lecture 10 (Debugging)
    // There will be two types of errors :

        // 1) when we make any typos & we get an EXPLICIT error (something's gone wrong)

            // a long message will be printed in terminal
            // the 1st line after "ReferenceError: `variable_name` is not defined" is the most important
            // it pin-points exactly where the typo/error has occured

        // 2) some logic problem in the code (where no EXPLICIT error message is shown)

            // Method 1: use `console.log()`
                // also, console.log() needs to be added at a specific point in apllication (where it feels like an error)
                
            // Method 2: node `debugger` (built in debugging tool which integrates with V8 engine & chrome browser)
                // use `debugger` at a specific point in apllication (where it feels like an error)
                // it won't stop our program by default
                // we have to run Node with a special option to get it stop {which is `node inspect`}
                    // if `node inspect` doesn't work, use `node --inspect-brk`
                // then, go to chrome://inspect
                // and click on inspect of the current file you're working on (shown there since you used `debugger`)
                    // 1st pause: on 1st line of code where applications starts to run
                    // click resume button,
                    // 2nd pause: on `debugger` line
                // to exit, click ctrl+C twice, & you'll come back to COMMAND-LINE