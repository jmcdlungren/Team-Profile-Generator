// Creates variable to bring in the file "Engineer.js" to test
const Engineer = require('../lib/Engineer');

describe('engineer class', () => {
    // This begins the test with a variable filling in all details matching that of the Engineer class
    const engineer = new Engineer('Tim', '123456', 'Tim@email.com', 'tim-github');
    it('Returns the name from the input', () => {
        // This creates a variable to test
        const engineerName = engineer.getName('Tim');
        // This test confirms if the variable to test matches the expected value
        expect(engineerName).toBe('Tim');
    })
    it('Returns the id from the input', () => {
        const engineerID = engineer.getId('123456');

        expect(engineerID).toEqual('123456');
    })
    it('Returns the email from the input', () => {
        const engineerEmail = engineer.getEmail('Tim@email.com');

        expect(engineerEmail).toBe('Tim@email.com');
    })
    it('Returns the GitHub username from the input', () => {
        const engineerGithub = engineer.getGithub('tim-github');

        expect(engineerGithub).toBe('tim-github');
    })
    it('Returns the role Engineer from the input', () => {
        const engineerRole = engineer.getRole();

        expect(engineerRole).toBe('Engineer');
    })
});