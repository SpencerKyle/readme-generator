const inquirer = require('inquirer');

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
            message: 'Please select a license for your project.',
            choices: ['Apache', 'MIT', 'Boost', 'Mozilla Public License']
        }
    ])
};


promptUser();
