// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// const iscLicence = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
// const nonCommercial = "[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)"

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


var badge;

function renderLicenseBadge(data) {
  if(`${data.license}` === "MIT") {
    badge = "https://img.shields.io/badge/License-MIT-yellow.svg"  
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  return `
  # ${data.name}
  
  ## ${data.description}
 
  ## ${data.usage}
  
  ## ${data.guidelines}
  
  ## ${data.instructions}

  // ## ${badge}
`; 
};

module.exports = generateMarkdown;






