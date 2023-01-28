const lib=require('../lib.js');
const Manager = require('../library/Manager')

const testE = new Manager ('Manong', 1, 'manong@gmail.com', '101','they/he')

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

test('Verifying employee office number...', () => {
    expect(testE.getOfficeNumber()).tobe(officeNumber);
})

test('Verifying employee pronouns...', () => {
    expect(testE.getPronouns()).tobe(pronouns);
})

test('Verifying employee role...', () => {
    expect(testE.getRole).tobe('Manager');
})