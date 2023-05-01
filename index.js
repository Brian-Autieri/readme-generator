// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your project title.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Enter what license you would like to use (MIT, Apache 2.0, Mozilla Public License 2.0).',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Write tests for your application and provide examples on how to run them.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter contact information for any questions.',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Enter your Github username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md created!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        writeToFile('README.md', generateMarkdown(response))
    })
};

// function call to initialize app
init();