const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs-extra');
const path = require('path');
const replace = require('replace');
const baseProjectInquirer = require('./lib/inquirer/base-project');
const componentNameInquirer = require('./lib/inquirer/component-name');
const teamNameInquirer = require('./lib/inquirer/team-name');
const portInquirer = require('./lib/inquirer/port');
const execSync = require('child_process').execSync;

clear();

let baseProject;
let componentName;
let teamName;
let port;
let folderName;
let angularComponentName;

const printCyan = text => console.log(` ${chalk.cyan(text)}`);
const printGreen = text => console.log(` ${chalk.green(text)}`);

console.log(
  chalk.yellow(
    figlet.textSync('AAVN MF', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  )
);

const run = async () => {
  let answer = await baseProjectInquirer.ask();
  baseProject = answer[baseProjectInquirer.questionName][0];

  answer = await componentNameInquirer.ask();
  componentName = answer[componentNameInquirer.questionName];
  correctComponentName();

  if (baseProject === 'Angular') {
    buildAngularComponentName();
  }

  answer = await teamNameInquirer.ask();
  teamName = answer[teamNameInquirer.questionName];

  answer = await portInquirer.ask();
  port = answer[portInquirer.questionName];

  folderName = baseProject.toLowerCase() + '-' + componentName;

  initialiseProject();

  replaceComponentName();

  replaceTeamName();

  replacePort();
  installDependencies();
  printCompletionScreen();
};

const correctComponentName = () => {
  if (!componentName.endsWith('component')) {
    componentName = componentName + '-component';
  }
};

const buildAngularComponentName = () => {
  angularComponentName = componentName
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join('');
};

const initialiseProject = () => {
  printCyan(
    `⏳  Creating ${baseProject} Web Component by the name of ${baseProject.toLowerCase()}-${componentName} ...`
  );
  console.log();

  fs.ensureDirSync(folderName);
  fs.emptyDirSync(folderName);

  printCyan('✅  Created project folder.');
  console.log();

  fs.copySync(
    path.resolve(__dirname, 'templates/' + baseProject.toLowerCase()),
    folderName
  );

  printCyan('✅  Initialized project.');
  console.log();
};

const replaceComponentName = () => {
  if (baseProject === 'React') {
    replace({
      regex: 'react-component-name',
      replacement: componentName,
      paths: [
        `${folderName}/package.json`,
        `${folderName}/src/App.js`,
        `${folderName}/public/index.html`
      ],
      recursive: true,
      silent: true
    });
  }

  if (baseProject === 'Angular') {
    fs.renameSync(
      `${folderName}/src/app/angular-component-name`,
      `${folderName}/src/app/${componentName}`
    );

    fs.renameSync(
      `${folderName}/src/app/${componentName}/angular-component-name.component.html`,
      `${folderName}/src/app/${componentName}/${componentName}.component.html`
    );

    fs.renameSync(
      `${folderName}/src/app/${componentName}/angular-component-name.component.ts`,
      `${folderName}/src/app/${componentName}/${componentName}.component.ts`
    );

    fs.renameSync(
      `${folderName}/src/app/${componentName}/angular-component-name.component.scss`,
      `${folderName}/src/app/${componentName}/${componentName}.component.scss`
    );

    replace({
      regex: 'angular-component-name',
      replacement: componentName,
      paths: [
        `${folderName}/src/app/${componentName}/${componentName}.component.ts`,
        `${folderName}/src/app/app.module.ts`,
        `${folderName}/src/index.html`
      ],
      recursive: true,
      silent: true
    });

    replace({
      regex: 'AngularComponentNameComponent',
      replacement: angularComponentName,
      paths: [
        `${folderName}/src/app/${componentName}/${componentName}.component.ts`,
        `${folderName}/src/app/app.module.ts`
      ],
      recursive: true,
      silent: true
    });
  }
};

const replaceTeamName = () => {
  if (baseProject === 'React') {
    replace({
      regex: 'team-name',
      replacement: teamName,
      paths: [
        baseProject === 'React'
          ? `${folderName}/public/index.html`
          : `${folderName}/src/index.html`
      ],
      recursive: true,
      silent: true
    });
  }

  if (baseProject === 'Angular') {
    replace({
      regex: 'team-name-template',
      replacement: teamName,
      paths: [`${folderName}/src/index.html`],
      recursive: true,
      silent: true
    });
  }
};

const replacePort = () => {
  replace({
    regex: 'port-number',
    replacement: port,
    paths: [`${folderName}/package.json`],
    recursive: true,
    silent: true
  });
};

const installDependencies = () => {
  printCyan('⏳ Installing project dependencies...');
  console.log();

  let command = `cd ${folderName} && npm i`;
  execSync(command, { stdio: [0, 1] });
  printCyan('✅ Installed project dependencies.');
  console.log();
};

const printCompletionScreen = () => {
  printGreen('✅  Done! 👍 Your project is ready for development.');
  console.log(`
        ${chalk.magenta('*')} ${chalk.magenta('To run project')}
        $ ${chalk.cyan('npm run start')}
        ${chalk.magenta('*')} ${chalk.magenta(`To publish on port ${port}`)}
        $ ${chalk.cyan('npm run publish')}
    `);
};

export async function cli() {
  await run();
}
