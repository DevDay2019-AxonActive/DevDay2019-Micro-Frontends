const inquirer = require('inquirer');
const QUESTION_NAME = 'team name';
module.exports = {
  questionName: QUESTION_NAME,
  ask: () => {
    const questions = [
      {
        type: 'input',
        name: QUESTION_NAME,
        message: 'What is your team name',
        validate: function(value) {
          if (value === '') {
            return '🙏  Please give me a name';
          }
          return true;
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
