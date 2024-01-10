const Account = require("./Account")

module.exports = class User {
    constructor(email, fullname) {
        this.fullname = fullname
        this.email = email
        this.account = new Account(this)
    }
}