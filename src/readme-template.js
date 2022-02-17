module.exports = templateData => {

    if (templateData.license === 'Apache') {
        var licensePic = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        // var licenseName = 'Apache'
    } else if (templateData.license === 'MIT') {
        var licensePic = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        // var licenseName = 'MIT'
    } else if (templateData.license === 'Boost') {
        var licensePic = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        // var licenseName = 'Boost'
    } else if (templateData.license === 'Mozilla Public License') {
        var licensePic = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        // var licenseName = 'Mozilla Public License'
    }

    return `
    ${licensePic}

    # ${templateData.project}

    ## Description

    ${templateData.description}

    ## Table of Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](questions)

    ## Installation

    type the following command in the terminal to install the necessary dependencies: ${templateData.dependencies}

    ## Usage

    once everything is installed, type '${templateData.usage}' in the terminal to start the application.

    ## License

    This project is covered under the following license: ${templateData.license}

    ## Contributing

    If you would like to help with this project, please refer to my email in the [questions](#questions) area to get in touch.

    ## Tests

    type ${templateData.tests} in the terminal to run the tests (make sure jest has been installed)

    ## Questions

    [Github](https://github.com/${templateData.username})
    
    If you have any questions, feel free to email me at [${templateData.email}](mailto:${templateData.email})

    `;
};


// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

