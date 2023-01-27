class Employee {
    constructor(name, id, email, pronouns) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.pronouns = pronouns;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPronouns() {
        return this.pronouns;
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee