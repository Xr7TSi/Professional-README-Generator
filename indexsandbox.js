
const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');
const markdown = require('./generateMarkdown.js');



const questions = [{
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
}, ];



function init() {
  inquirer.prompt(questions)
  .then((data) => {
    fs.writeFile(`README.md`, markdown(data), (err) =>
      err ? console.log(err) : console.log('Success!'),
    );
  });  
};


// Function call to initialize app
init();
