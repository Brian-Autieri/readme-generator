// TODO: Create a function that returns a license badge based on which license is passed in
// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache 2.0') {
      return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'Mozilla Public License 2.0') {
      return `![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange.svg)`;
  } else {
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// create a function that returns the license link
if (license === 'MIT') {
  return `https://opensource.org/licenses/MIT`;
} else if (license === 'Apache 2.0') {
  return `https://opensource.org/licenses/Apache-2.0`;
}
else if (license === 'Mozilla Public License 2.0') {
  return `https://opensource.org/licenses/MPL-2.0`;
}
else {
  return '';
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// create a function that returns the license section of README
if (license === 'MIT') {
  return `This project is licensed under the MIT license.`;
} else if (license === 'Apache 2.0') {
  return `This project is licensed under the Apache 2.0 license.`;
}
else if (license === 'Mozilla Public License 2.0') {
  return `This project is licensed under the Mozilla Public License 2.0 license.`;
}
else {
  return '';
}
};

// TODO: Create a function to generate markdown for README
// create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
## Description
${data.description}
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributers](#contributers)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributers
${data.contributers}
## Tests
${data.tests}
## Questions
${data.questions}
## Github Username
${data.username}
## Email Address
${data.email}
`;
};

module.exports = generateMarkdown;
