// This brings in the file Employee.js so that the Manager class can extend from it, thus bringing in the properties of the Employee class
const Employee = require('./Employee.js');

// This creates the Manager class, which pulls from the Employee class, including its respective methods. This also adds the property of officeNumber and the corresponding method to return it. Finally, this class overrides the role method to return "Manager"
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;