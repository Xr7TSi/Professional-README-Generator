function pickLicense(data) {
  if (data.license === "MIT") {
    badgeLink = "![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)",
    // licenseLink = "https://opensource.org/licenses/MIT"
    licenseLink = "![License Text](https://opensource.org/licenses/MIT)"
  } else if (data.license === "Mozilla") {
    badgeLink = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    licenseLink = "https://opensource.org/licenses/MPL-2.0"
  } else if (data.license === "Attribution License") {
    badgeLink = "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)",
    licenseLink = "https://opendatacommons.org/licenses/odbl/"
  };
};


function renderLicense() {
  return licenseLink 
};

function renderBadge() {
  return badgeLink 
};


function generateMarkdown(data) {
  pickLicense(data);
  return `
  # ${renderBadge(data.license)}

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

  ## Questions?

  #### Github: ${data.profile}
  #### Email me at ${data.email} for any additional questions.

  ## ${renderLicense(data.license)}
`; 
};

module.exports = generateMarkdown;











