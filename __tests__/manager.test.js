const Manager = require('../library/Manager')

test('Verifying employee name...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    expect(testE.getName()).toBe('Manong');
})

test('Verifying employee ID...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    expect(testE.getId()).toBe(1);
})

test('Verifying employee email...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying employee office number...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    expect(testE.getOfficeNumber()).toBe('101');
})

test('Verifying employee pronouns...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying employee role...', () => {
    const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')
    expect(testE.getRole()).toBe('Manager');
})