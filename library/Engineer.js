const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github, pronouns) {
        super(name, id, email, pronouns);
        this.github = github
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer