const Database = require("./Database")
const Author = require("./entities/Author")
const User = require("./entities/User")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        App.#database.find('users')
    }

    createAuthor(name, natioality, bio) {
        const author = new Author(name, natioality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor9() {
        return App.#database.find('authors')
    }
}