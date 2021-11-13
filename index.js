const inquirer = require('inquirer');
const generatePage = require('./src/readme-template');
const writeFile = require('./utils/generate-page.js');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub Username? (REQUIRED)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (REQUIRED)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (REQUIRED)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please give a name for your project!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project (REQUIRED)' ,
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a short description!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project. (REQUIRED)',
            choices: ['Apache', 'MIT', 'Boost', 'Mozilla Public License'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'dependecies',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'what does the user need to know about contribution to the repo'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo'
        }
    ]);
};


promptUser()
    .then(readmeData => {
        return generatePage(readmeData);
    })
    .then(readmePage => {
        return writeFile(readmePage);
    });
