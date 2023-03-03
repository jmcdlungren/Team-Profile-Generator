const Manager = require('../lib/Manager');

describe('Manager class', () => {
    const manager = new Manager('Tom', '123456', 'Tom@email.com', '21');
    it('Returns the name from the input', () => {
        const managerName = manager.getName('Tom');

        expect(managerName).toBe('Tom');
    })
    it('Returns the id from the input', () => {
        const managerID = manager.getId('123456');

        expect(managerID).toEqual('123456');
    })
    it('Returns the email from the input', () => {
        const managerEmail = manager.getEmail('Tom@email.com');

        expect(managerEmail).toBe('Tom@email.com');
    })
    it('Returns the office number from the input', () => {
        const managerOfficeNumber = manager.getOfficeNumber('21');

        expect(managerOfficeNumber).toBe('21');
    })
    it('Returns the role Manager from the input', () => {
        const managerRole = manager.getRole();

        expect(managerRole).toBe('Manager');
    })
});