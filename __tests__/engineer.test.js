const Engineer = require('../library/Engineer')

test('Verifying engineer is generated as an object.', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    // ensures that the object is an instance of engineer
    expect(testE).toBeInstanceOf(Engineer)
})

test('Verifying engineer name...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    // ensures that the value passed in for the name matches the value
    expect(testE.getName()).toBe("Manong");
})

test('Verifying engineer ID...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    // ensures that the value passed in for the id matches the value
    expect(testE.getId()).toBe(1);
})

test('Verifying engineer email...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    // ensures that the value passed in for the email matches the value
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying engineer Github...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    // ensures that the value passed in for the github username matches the value
    expect(testE.getGithub()).toBe("manongchris");
})

test('Verifying engineer pronouns...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    // ensures that the value passed in for the pronouns matches the value
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying engineer role...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the value passed in for the role matches the value
    expect(testE.getRole()).toBe('Engineer');
})