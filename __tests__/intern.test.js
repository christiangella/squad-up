const Intern = require('../library/Intern')

test('Verifying intern is generated as an object.', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the object is an instance of intern
    expect(testE).toBeInstanceOf(Intern)
})

test('Verifying intern name...', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the value passed in for the name matches the value
    expect(testE.getName()).toBe('Manong');
})

test('Verifying intern ID...', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the value passed in for the id matches the value
    expect(testE.getId()).toBe(1);
})

test('Verifying intern email...', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the value passed in for the email matches the value
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying intern school...', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the value passed in for the school matches the value
    expect(testE.getSchool()).toBe('UC Davis');
})

test('Verifying intern pronouns...', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the value passed in for the pronouns matches the value
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying intern role...', () => {
    const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')
    // ensures that the value passed in for the role matches the value
    expect(testE.getRole()).toBe('Intern');
})