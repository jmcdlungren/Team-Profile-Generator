// This brings in the file Employee.js so that the Engineer class can extend from it, thus bringing in the properties of the Employee class
const Employee = require('./Employee.js');

// This creates the Engineer class, which pulls from the Employee class, including its respective methods. This also adds the property of github and the corresponding method to return it. Finally, this class overrides the role method to return "Engineer"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;