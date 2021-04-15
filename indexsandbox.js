
const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');
const markdown = require('./generateMarkdown.js');



const questions = [{
  type: 'input',
  message: 'Enter your project title.',
  name: 'title',
},
{
  type: 'input',
  message: 'Enter your project description.',
  name: 'description',
},
{
  type: 'input',
  message: 'Enter installation instructions.',
  name: 'installation',
},
{
  type: 'input',
  message: 'Enter usage information.',
  name: 'usage',
},
{
  type: 'input',
  message: 'Enter contribution guidelines.',
  name: 'contributions',
},
{
  type: 'input',
  message: 'Enter test instructions',
  name: 'test',
},
{
  type: 'list',
  message: 'Pick your license',
  name: 'license',
  choices: ['MIT', 'otherChoice'],
}, ];



function init() {
  inquirer.prompt(questions)
  .then((data) => {
    fs.writeFile(`README.md`, markdown(data), (err) =>
      err ? console.log(err) : console.log('Write File Success!'),
    ); 
  })
};



// Function call to initialize app
init();

