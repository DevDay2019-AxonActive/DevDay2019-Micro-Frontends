const inquirer = require('inquirer');
const QUESTION_NAME = 'port';
module.exports = {
  questionName: QUESTION_NAME,
  ask: () => {
    const questions = [
      {
        type: 'input',
        name: QUESTION_NAME,
        message: 'Which port to publish (example: 2111)',
        validate: function(value) {
          if (value === '') {
            return '🙏  Please give me a port number';
          }

          var pass = value.match(/([1-9]+)/g);

          if (pass && pass[0] === value) {
            return true;
          }

          return 'Wrong format! 😭';
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
