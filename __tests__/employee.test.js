const Employee = require('../library/Employee.js')


test('Verifying employee is generated as an object.', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the object is an instance of employee
    expect(testE).toBeInstanceOf(Employee)
})

test('Verifying employee name...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the value passed in for the name matches the value
    expect(testE.getName()).toEqual('Manong');
})

test('Verifying employee ID...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the value passed in for the id matches the value
    expect(testE.getId()).toBe(1);
})

test('Verifying employee email...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the value passed in for the email matches the value
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying employee pronouns...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the value passed in for the pronouns matches the value
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying employee role...', () => {
    const testE = new Employee ('Manong', 1, 'manong@gmail.com', 'they/he')
    // ensures that the value passed in for the role matches the value
    expect(testE.getRole()).toBe('Employee');
})