/* INDEX JS SERVER FILE */

// NODE MODULES
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

// MODELS
const Manager = require('./library/Manager')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')

const generateSquad = require('./source/generateSquad.js')

// blank team array as placeholder to store data
const teamArray = [];

// starts prompt by asking for manager information
const initM = [
{
    type: 'input',
    name: 'nameManager',
    message: "What is the name of the team manager?"
},
{
    type: 'input',
    name: 'pronounsManager',
    message: "What are the pronouns of the team manager?"
},
{
    type: 'input',
    name: 'idManager',
    message: "What is the manager's employee ID number?"
},
{
    type: 'input',
    name: 'emailManager',
    message: "What is the email of the team manager?"
},
{
    type: 'input',
    name: 'officeManager',
    message: "What is the office number of the team manager?"
}]

// questions for engineer role
const initE = [
{
    type: 'input',
    name: 'nameEngineer',
    message: "What is the name of the engineer?"
},
{
    type: 'input',
    name: 'pronounsEngineer',
    message: "What are the pronouns of the engineer?"
},
{
    type: 'input',
    name: 'idEngineer',
    message: "What is the engineer's employee ID number?"
},
{
    type: 'input',
    name: 'emailEngineer',
    message: "What is the email of the team engineer?"
},
{
    type: 'input',
    name: 'githubEngineer',
    message: "What is the GitHub of the Engineer?"
}]

// questions for intern role
const initI = [
{
    type: 'input',
    name: 'nameIntern',
    message: "What is the name of the Intern?"
},
{
    type: 'input',
    name: 'pronounsIntern',
    message: "What are the pronouns of the Intern?"
},
{
    type: 'input',
    name: 'idIntern',
    message: "What is the Intern's employee ID number?"
},
{
    type: 'input',
    name: 'emailIntern',
    message: "What is the email of the team Intern?"
},
{
    type: 'input',
    name: 'schoolIntern',
    message: "What is the school of the Intern?"
}]

// prompt to add team members
const initT = [
{
    type: 'list',
    name: 'choiceTeam',
    message: "Let's add a team member. What would you like to add?",
    choices: ['Engineer', 'Intern', "No"]
}
]

// function to create manager and start process
// creates instance of manager through model, pushes it to teamarray, and then initiates function for adding team members
function createManager () {
    inquirer
    .prompt(
      initM
    )
    .then((answers) => {
      console.log(answers)
      const manager = new Manager (answers.nameManager, answers.idManager, answers.emailManager, answers.officeManager, answers.pronounsManager)
      teamArray.push(manager)
      createSquad()
    })
}

// creates instance of engineer through model, pushes it to teamarray, and then initiates function for adding team members
function createEngineer () {
    inquirer
    .prompt(
      /* Pass your questions in here */
      initE
    )
    .then((answers) => {
      console.log(answers)
      const engineer = new Engineer (answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer, answers.pronounsEngineer)
      teamArray.push(engineer)
      createSquad()
    })
}

// creates instance of intern through model, pushes it to teamarray, and then initiates function for adding team members
function createIntern () {
    inquirer
    .prompt(
      /* Pass your questions in here */
      initI
    )
    .then((answers) => {
      console.log(answers)
      const intern = new Intern (answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern, answers.pronounsIntern)
      teamArray.push(intern)
      createSquad()
    })
}

// sends data to generatesquad.js and where the resulting output file is put
function createTeam () {
    fs.writeFile(path.join(path.resolve(__dirname, "dist"),"index.html"),generateSquad(teamArray),(err)=>{
    })
}

// overall flow
function createSquad () {
    inquirer
    .prompt(
      initT
    )
    .then((answers) => {
      console.log(answers)
      switch (answers.choiceTeam) {
        case "Engineer":
        createEngineer()
            break;
        case "Intern":
        createIntern()
            break;
        default:
        createTeam()
            break;
      }
    })
}

// startup application for aesthetics
const initApplication = async() => {
    console.log(`\n\n✧ * ━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n       welcome to SQUAD UP.\n       let's get your squad\n       generated . . .\n\n   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ * .\n`)
    createManager()
}

initApplication()