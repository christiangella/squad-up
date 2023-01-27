const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, school, pronouns) {
        super(name, id, email, pronouns);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern