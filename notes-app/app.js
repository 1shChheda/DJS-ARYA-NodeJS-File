//Lecture 1
/*    const fileSys = require('fs')

    fileSys.writeFileSync('notes.txt','Haha, I changed the text again.') //kind of overwrites the text in the selected file 

    //Challenge 1
        fileSys.appendFileSync('notes.txt',' Okay, now this is a append to the existing text.')
*/
//Lecture 2
    //require('./utilities.js');
    //app.js cannot access the variables defined in utilities.js, even though it as loaded in with 'require'

    //we use module.export, & whatever was assigned in the module.export will be accessable to other files wherever it has been "required"
        // const add = require('./utilities.js');
        // const sum = add(4, -1);

        // console.log(sum);

    //Challenge 2
        // const getNotes = require('./utilities.js');
        // const msg = getNotes();
        // console.log(msg);

//Lecture 3
    // const validator = require('validator');
    // for CORE node Modules, we type out the module_name
    // for our files, we provide the specific relative path to the file
    // for npm modules, we type out the npm_package_name

    // console.log(validator.isEmail('vansh@awesome.com')); // checks if the email is valid or not
    // console.log(validator.isURL('https://nodejs.com')); //checks if the URL is valid or not

//Lecture 4
    // for larger applications, node_modules folder can get reall, really big. So, we can delete it when we want to share the code (or add to a Git Repository)
    // we can always retrieve it back by using 'npm install' command in terminal

    //Challenge 4
        const chalk = require('chalk');
        console.log(chalk.green('Hello World!')); //using chalk@4.1.2
        console.log(chalk.blue('India') + chalk.yellow(' Is') + chalk.red(' The Best')); // Combine styled and normal strings
        // Compose multiple styles using the chainable API
            // order in which styles are written doesn't matter
            console.log(chalk.yellow.italic('Royale'));
            console.log(chalk.yellow.bgRed.inverse(`Iron Man`)); //'inverse' just inverses the colours of font & background


