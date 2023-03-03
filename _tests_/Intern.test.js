// Creates variable to bring in the file "Intern.js" to test
const Intern = require('../lib/Intern');

describe('intern class', () => {
    // This begins the test with a variable filling in all details matching that of the Intern class
    const intern = new Intern('Will', '123456', 'Will@email.com', 'UofA');
    it('Returns the name from the input', () => {
        // This creates a variable to test
        const internName = intern.getName('Will');
        // This test confirms if the variable to test matches the expected value
        expect(internName).toBe('Will');
    })
    it('Returns the id from the input', () => {
        const internID = intern.getId('123456');

        expect(internID).toEqual('123456');
    })
    it('Returns the email from the input', () => {
        const internEmail = intern.getEmail('Will@email.com');

        expect(internEmail).toBe('Will@email.com');
    })
    it('Returns the school name from the input', () => {
        const internGithub = intern.getSchool('UofA');

        expect(internGithub).toBe('UofA');
    })
    it('Returns the role Intern from the input', () => {
        const internRole = intern.getRole();

        expect(internRole).toBe('Intern');
    })
});