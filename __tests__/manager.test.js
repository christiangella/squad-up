const Manager = require('../library/Manager')

test('Verifying employee name...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    // ensures that the object is an instance of manager
    expect(testE.getName()).toBe('Manong');
})

test('Verifying employee ID...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    // ensures that the value passed in for the name matches the value
    expect(testE.getId()).toBe(1);
})

test('Verifying employee email...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    // ensures that the value passed in for the email matches the value
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying employee office number...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    // ensures that the value passed in for the office number matches the value
    expect(testE.getOfficeNumber()).toBe('101');
})

test('Verifying employee pronouns...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    // ensures that the value passed in for the pronouns matches the value
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying employee role...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    // ensures that the value passed in for the role matches the value
    expect(testE.getRole()).toBe('Manager');
})