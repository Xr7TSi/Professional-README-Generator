// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = ["Enter project title", "Enter project description", "Enter usage information", "Enter contribution guidelines", "Enter test instructions" ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter your project title',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter your project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'instructions',
    },
   
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
