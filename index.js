const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const renderTeam = require('./src/TeamBuilder.js');
const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = [];


function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
            }
        ])
        .then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            teamMembers.push(manager)
        })
        .then(() => init())
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
            }
        ])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            teamMembers.push(engineer)
        })
        .then(() => init())
}

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the name of the intern's school?",
            }
        ])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            teamMembers.push(intern)
        })
        .then(() => init())
}

function buildTeam() {
    // renderTeam(teamMembers);
    fs.writeFileSync("./dist/index.html", renderTeam(teamMembers))
}

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Which employee needs to be added?',
                choices: ['Manager', 'Engineer', 'Intern', 'Finish building my team'],
            }

        ])
        .then(response => {
            console.log(response)

            switch (response.employee) {
                case 'Manager':
                    createManager();
                    break
                case 'Engineer':
                    createEngineer();
                    break
                case 'Intern':
                    createIntern();
                    break
                default:
                    buildTeam();
            }
        })
}


init();