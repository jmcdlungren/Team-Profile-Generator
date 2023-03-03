const Engineer = require('../lib/Engineer');

describe('engineer class', () => {
    const engineer = new Engineer('Tim', '123456', 'Tim@email.com', 'tim-github');
    it('Returns the name from the input', () => {
        const engineerName = engineer.getName('Tim');

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