const Employee = require('../library/Employee.js')

const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')

test('Verifying employee is generated as an object.', () => {
    expect(testE).toBeInstanceOf(Employee)
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

test('Verifying employee pronouns...', () => {
    expect(testE.getPronouns()).tobe(pronouns);
})

test('Verifying employee role...', () => {
    expect(testE.getRole).tobe('Employee');
})