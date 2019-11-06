const inquirer = require('inquirer');
const QUESTION_NAME = 'component name';
module.exports = {
  questionName: QUESTION_NAME,
  ask: () => {
    const questions = [
      {
        type: 'input',
        name: QUESTION_NAME,
        message: 'What is the component name (example: my-awesome-component)',
        validate: function(value) {
          if (value === '') {
            return '🙏  Please give me a name';
          }

          var pass = value.match(/([a-z-]+)/g);
          var lastChar = value.substr(value.length - 1);
          var firstChar = value.charAt();
          if (pass[0] === value && lastChar != '-' && firstChar != '-') {
            return true;
          }

          return 'Wrong format! 😭';
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
