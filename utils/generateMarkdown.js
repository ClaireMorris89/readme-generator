// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'NONE') {
        return ''
    }
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
};



const generateReadMe = ({ username, email, title, description, installation, usage, contribution, test, license }) => 
{return `# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

## Questions
${username}

## License
${license}

For additional questions, please reach out to me at : ${email}

`}

module.exports = generateReadMe;