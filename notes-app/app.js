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
    // to install an npm package, type "npm install <package_name>@<version number>" (without the quotes)
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
        // const chalk = require('chalk');
        // console.log(chalk.green('Hello World!')); //using chalk@4.1.2
        // console.log(chalk.blue('India') + chalk.yellow(' Is') + chalk.red(' The Best')); // Combine styled and normal strings
        // Compose multiple styles using the chainable API
            // order in which styles are written doesn't matter
            // console.log(chalk.yellow.italic('Royale'));
            // console.log(chalk.yellow.bgRed.inverse.bold(`Iron Man`)); //'inverse' just inverses the colours of font & background

//Lecture 5
    // local npm modules (dependencies) get loaded into project code using 'require'
    // global npm modules don't require to be loaded into the source files
        // when we install a package globally, it gets installed in the OS itself

    // to globalize a new npm module, type "npm install <package_name>@<version number> -g" (without the quotes)

    // If error is shown when checking "package_name -v", The FIX: (for windows)
        // 1)Open Windows PowerShell from window icon in PC
        // 2)Open Right-click PowerShell and Click "Run As Administrator"
        // 3)Run "Set-ExecutionPolicy" (without the quotes)
        // 4)Assign Set-ExecutionPolicy : "Unrestricted" (without the quotes)
        // 5)Enter Y (i.e. Yes)
        // problem fixed! Re-Run "package_name -v" in Terminal

    // to start nodemon, we type "nodemon app.js" in the Terminal, instead of "node app.js"
        // it will automatically show stuff in Terminal,(upon saving) & we dont have to write "node app.js" again & again
        // const chalk = require('chalk');
        // console.log(chalk.bgRed.bold(`ERROR`));
        // console.log(chalk.bgGreen.bold(`SUCCESS`));
    // to end nodemon (& get back to terminal commands), press Ctrl+C

//Lecture 6 (S3-02) (Section 4 starts)
    // Javascript in Browser --> window & document
    // Javascript in NodeJs --> global & process

    // Getting Input from User via COMMAND LINE ARGUEMENTS
        // BASICS
        const chalk = require('chalk');
        // console.log(chalk.bgRed.bold(`ERROR`));
        // console.log(chalk.bgGreen.bold(`SUCCESS`));
        // console.log(process.execPath); // returns a string signifies the absolute path of the node.js executable which started the node.js process.
        // console.log(process.argv); // gives array of 3 strings. 3rd one is that additional input the User typed
        // console.log(process.argv[2]); // used in arrays in JS

        /*let args = process.argv;
            console.log("Total number of arguments are: "+args.length);*/
        /*let cmd = process.argv[2];

        if (cmd === 'add'){
            console.log(chalk.blue.bgWhite.bold(`Adding Note!`));
        } else if (cmd === 'remove'){
            console.log(chalk.red.bgWhite.bold(`Removing Note!`));
        }*/
        /* after typing "node app.js" in terminal, every statement written after a <space> becomes an individual arguement, which we can use beneficially. example:
        Terminal: node app.js add --title="Harry Porter" 
        note: arguements don't get Parsed i.e. entire raw arguement is taken */

//Lecture 7 (S3-03)
        const yargs = require('yargs');

        // console.log(process.argv);
        // console.log(yargs.argv); // to see what parsing has yargs done
    // Terminal: node app.js add --title="Harry Porter"
    // Output (from Yargs): { _: [ 'add' ], title: 'Harry Porter', '$0': 'app.js' }

    // Customize Yargs Verion
        // node app.js --help // to check what COMMANDS have been assigned so far, & other stuff too
        // node app.js --version (shows version number)(default 1.0.0)
        yargs.version('1.9.2'); // changes yargs version number
    
    // Create Add, Remove, Read, List Notes
        yargs.command({
            command: 'add',
            describe: 'Add a note', // Set describe to false to create a hidden command. Hidden commands don’t show up in the help output and aren’t available for completion.
            builder: {
                title: {
                    describe: 'Note Title',
                    demandOption: true, // default 'false'; but 'true' will make it a requirement to write a title arguement in COMMAND Line
                    type: 'string'
                },
                body: {
                    describe: 'main body of the Note',
                    type: 'string'
                }
            },
            handler: function (argv){
                console.log(`Title: `+ argv.title)
                if(argv.body === '' || argv.body === undefined){ //an additional add-on from my end
                    console.log('No body data yet');
                } else{
                    console.log(`Body: `+ argv.body);
                }
                
            }
        });
        yargs.command({
            command: 'remove',
            describe: 'Remove a note',
            handler: function (){
                console.log(`Removing a Note!`)
            }
        });
        yargs.command({
            command: 'list',
            describe: 'List all notes',
            handler: function (){
                console.log(`Listing all Notes!`)
            }
        });
        yargs.command({
            command: 'read',
            describe: 'Read a note',
            handler: function (){
                console.log(`Reading a Note!`)
            }
        });

    yargs.parse(); // does the Parsing thing without printing entire argv again (like console.log(yargs.argv) does)
    // console.log(yargs.argv);

    

        
        

