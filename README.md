# Agreement Signing Process Automation Tests

This repository contains automation tests for verifying the first three steps in the Agreement Signing process using JavaScript with Cypress.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **Cypress**: This project uses Cypress for automation testing. It can be installed as a dependency.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   
2. Install the dependencies:
   npm install
   
Running Tests
To run the tests, execute the following command in your terminal:
npx cypress open

This will open the Cypress Test Runner, where you can select and run the individual test files.

Generating Test Reports
Cypress provides built-in support for generating test reports. To generate reports, you can use the following command:

npx cypress run --reporter mocha-junit-reporter

Make sure to install the reporter by adding it as a dependency:

npm install --save-dev mocha-junit-reporter

Additional Information
You can also use Allure for generating more comprehensive reports. Follow the Allure documentation to set it up and integrate it with Cypress.

Project Structure
cypress/: Contains the test specifications, fixtures, and support files.
cypress/integration/: Place your test files here.
cypress/fixtures/: Use this directory to store test data.
cypress/support/: This directory contains support files to enhance the Cypress environment.
Contributing
If you wish to contribute to this project, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

### Customization
- Replace `https://github.com/Srbuhi95/VoiceSpin.git` and `~/VoiceSpin` with your actual repository URL and directory name.
  git clone https://github.com/Srbuhi95/VoiceSpin.git ~/VoiceSpin

