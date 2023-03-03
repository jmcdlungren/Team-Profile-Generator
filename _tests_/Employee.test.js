const Employee = require('../lib/Employee');

describe('Employee class', () => {
    const employee = new Employee('Bob', '123456', 'Bob@email.com');
    it('Returns the name from the input', () => {
        const employeeName = employee.getName('Bob');

        expect(employeeName).toBe('Bob');
    })
    it('Returns the id from the input', () => {
        const employeeID = employee.getId('123456');

        expect(employeeID).toEqual('123456');
    })
    it('Returns the email from the input', () => {
        const employeeEmail = employee.getEmail('Bob@email.com')

        expect(employeeEmail).toBe('Bob@email.com');
    })
    it('Returns the role Employee from the input', () => {
        const employeeRole = employee.getRole();

        expect(employeeRole).toBe('Employee');
    })
});