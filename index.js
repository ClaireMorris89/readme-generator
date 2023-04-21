// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//attach generatemarkdownjs/generatereadme function???
 



// TODO: Create an array of questions for user input
// const questions = []
const promptUser = ()=>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'What is the description for your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?',   
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the the contribution guidelines for your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the testing instructions for your project?',
        },
        {
            type: '',
            name: 'license',
            message: 'Choose a license for your project',
        },
    ])

// TODO: Create a function to write README file
.then((data) => {
    const readMe = generateReadMe(data);

    fs.writeFile('ReadMe.md', readMe, (err) => err? console.log(err) : console.log('Created ReadMe!') )
});

// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
};