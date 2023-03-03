// Class of employee is created with the necessary details of name, id, and email being added, along with the methods that will return those details.
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
  }
  
  module.exports = Employee;