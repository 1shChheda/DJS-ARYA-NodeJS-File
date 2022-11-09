//Lecture 9 (S3-05)
    const fs = require('fs');

    const chalk = require('chalk');

    const addNote = (title,body) => {
        const notes = loadNotes(); // brings the pre-exisitng data from JSON to JS

        const index = notes.findIndex((note,index) => note.title === title)
        // const index = notes.findIndex(function(note,index){
        //     return note.title === title
        // })

        const duplicateNotes = notes.filter((note) => note.title === title) // if true, the duplicateNotes array will have 1 element, else 0 elements
        // const duplicateNotes = notes.filter(function(note){
        //     return note.title === title // if true, the duplicateNotes array will have 1 element, else 0 elements
        // })

        if (duplicateNotes.length === 0){
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


    module.exports = {
        addNote: addNote,
        removeNote: removeNote,
        listNotes: listNotes
    }