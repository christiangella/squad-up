const Engineer = require('../library/Engineer')

test('Verifying engineer is generated as an object.', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    expect(testE).toBeInstanceOf(Engineer)
})

test('Verifying engineer name...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    expect(testE.getName()).toBe("Manong");
})

test('Verifying engineer ID...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    expect(testE.getId()).toBe(1);
})

test('Verifying engineer email...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    expect(testE.getEmail()).toBe('manong@gmail.com');
})

test('Verifying engineer Github...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    expect(testE.getGithub()).toBe("manongchris");
})

test('Verifying engineer pronouns...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'manongchris','they/he')
    expect(testE.getPronouns()).toBe('they/he');
})

test('Verifying engineer role...', () => {
    const testE = new Engineer ('Manong', 1, 'manong@gmail.com', 'they/he')
    expect(testE.getRole()).toBe('Engineer');
})