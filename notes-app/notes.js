//Lecture 9 (S3-05)
    const fs = require('fs');

    const addNote = function(title,body){
        const notes = loadNotes();

        const duplicateNotes = notes.filter(function(note){
            return note.title === title // if true, the duplicateNotes array will have 1 element, else 0 elements
        })

        if (duplicateNotes.length === 0){
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log('New Note ADDED!')
        } else{
            console.log('Note Title TAKEN!');
        }

    }

    const saveNotes = function(notes) {
        const notesDataJSON = JSON.stringify(notes);
        fs.writeFileSync('1-notes.json',notesDataJSON);
        // console.log(notes);
    }

    const loadNotes = function(){
        try{ //any code in 'try' block throws an error, that code is immediately going to stop, & it's going to run 'catch' block instead 
            const data = JSON.parse(fs.readFileSync('1-notes.json').toString());
            return data
        } catch(e) {
            return []

        }


    }

    module.exports = {
        addNote: addNote,
    }