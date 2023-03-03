// This brings in the file Employee.js so that the Intern class can extend from it, thus bringing in the properties of the Employee class
const Employee = require('./Employee.js');

// This creates the Intern class, which pulls from the Employee class, including its respective methods. This also adds the property of school and the corresponding method to return it. Finally, this class overrides the role method to return "Intern"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;