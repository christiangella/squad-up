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

const teamArray = [];

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

const initT = [
{
    type: 'list',
    name: 'choiceTeam',
    message: "Let's add a team member. What would you like to add?",
    choices: ['Engineer', 'Intern', "No"]
}
]

// psuedocode
// -- prompt manager to complete
// then ask if there are employees
// if yes, then add employees by prompt

function createManager () {
    inquirer
    .prompt(
      /* Pass your questions in here */
      initM
    )
    .then((answers) => {
      console.log(answers)
      const manager = new Manager (answers.nameManager, answers.idManager, answers.emailManager, answers.officeManager, answers.pronounsManager)
      teamArray.push(manager)
      createSquad()
    })
}
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
function createTeam () {
    fs.writeFile(path.join(path.resolve(__dirname, "dist"),"index.html"),generateSquad(teamArray),(err)=>{
    })
}

function createSquad () {
    inquirer
    .prompt(
      /* Pass your questions in here */
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

const initApplication = async() => {
    console.log(`\n\n✧ * ━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n       welcome to SQUAD UP.\n       let's get your squad\n       generated . . .\n\n   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ * .\n`)
    createManager()
}

initApplication()