// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = ["Enter project title", "Enter project description", "Enter usage information", "Enter contribution guidelines", "Enter test instructions" ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');

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
    {
      type: 'list',
      message: 'Chose your a licence',
      name: 'contact',
      choices: ['MIT'],
    },
   
  ])

  
  .then((data) => {
    const filename = `README.md`;

    // fs.writeFile(filename, JSON.stringify(data.description, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!'),
    // );

    fs.writeFile(filename, (data.description), (err) =>
    err ? console.log(err) : console.log('Success!'),
  );
    
  });clear



