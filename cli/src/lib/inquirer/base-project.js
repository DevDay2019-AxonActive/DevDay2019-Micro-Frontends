const inquirer = require('inquirer');
const QUESTION_NAME = 'base project';
module.exports = {
  questionName: QUESTION_NAME,
  ask: () => {
    const questions = [
      {
        type: 'checkbox',
        name: QUESTION_NAME,
        message: 'Select the base project you would like to use:',
        choices: [
          { name: 'Angular', value: 'Angular' },
          { name: 'React', value: 'React' }
        ],
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return '🙏  Please select one of them! (Press Space to Select)';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
