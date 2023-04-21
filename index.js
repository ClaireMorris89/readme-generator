// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
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
    ])
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
