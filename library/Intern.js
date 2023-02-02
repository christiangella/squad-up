const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, school, pronouns) {
        super(name, id, email, pronouns);
        this.school = school
    }
    // establishes function for each data item
    // other items are defined in the employee model
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern