// Function to generate markdown for README
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
