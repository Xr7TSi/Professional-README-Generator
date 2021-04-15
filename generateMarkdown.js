function pickLicense(data) {
  if (data.license === "MIT") {
    badgeLink = "![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)",
    licenseLink = "https://opensource.org/licenses/MIT"
  } else if (data.license === "Mozilla") {
    badgeLink = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    licenseLink = "https://opensource.org/licenses/MPL-2.0"
  } else if (data.license === "Attribution License") {
    badgeLink = "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)",
    licenseLink = "https://opendatacommons.org/licenses/odbl/"
  };
};


// function renderLicenseBadge(license) {
//   return badgeLink
// };

// function renderLicenseLink(license) {
//   return licenseLink
// };


// function renderLicenseSection(license) {
//   var myNewBadge = renderLicenseBadge()
//   var myNewLink = renderLicenseLink()
//   return [myNewBadge, myNewLink] 
// };




function renderLicenseSection() {
  return [badgeLink, licenseLink] 
};


function generateMarkdown(data) {
  pickLicense();
  return `
  # ${data.title}
  
  ## Description: 

  #### ${data.description}

  ## Installation: 

  #### ${data.installation}
 
  ## Usage: 

  #### ${data.usage}
  
  ## Contributing: 

  #### ${data.contributions}
  
  ## Tests: 

  #### ${data.test}

  ## ${renderLicenseSection(data.license)}
`; 
};

module.exports = generateMarkdown;











