const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber, pronouns) {
        super(name, id, email, pronouns);
        this.officeNumber = officeNumber
    }
    // establishes function for each data item
    // other items are defined in the employee model
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager