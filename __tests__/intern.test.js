const Intern = require('../library/Intern')

const testE = new Intern ('Manong', 1, 'manong@gmail.com', 'UC Davis','they/he')

test('Verifying employee is generated as an object.', () => {
    expect(testE).toBeInstanceOf(Engineer)
})

test('Verifying employee name...', () => {
    expect(testE.getName()).tobe(name);
})

test('Verifying employee ID...', () => {
    expect(testE.getId()).tobe(id);
})

test('Verifying employee email...', () => {
    expect(testE.getEmail()).tobe(email);
})

test('Verifying employee school...', () => {
    expect(testE.getSchool()).tobe(school);
})

test('Verifying employee pronouns...', () => {
    expect(testE.getPronouns()).tobe(pronouns);
})

test('Verifying employee role...', () => {
    expect(testE.getRole).tobe('Intern');
})