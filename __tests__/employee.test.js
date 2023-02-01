const Employee = require('../library/Employee.js')


test('Verifying employee is generated as an object.', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE).toBeInstanceOf(Employee)
})

test('Verifying employee name...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE.getName()).toEqual('Manong');
})

test('Verifying employee ID...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE.getId()).toBe(1);
})

test('Verifying employee email...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying employee pronouns...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying employee role...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE.getRole()).toBe('Employee');
})