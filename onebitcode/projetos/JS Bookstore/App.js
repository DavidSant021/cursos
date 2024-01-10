const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Posters = require("./entities/Posters")
const User = require("./entities/User")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, natioality, bio) {
        const author = new Author(name, natioality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks() {
            return App.#database.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Posters(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(itens, user) {
        const order = new Order(itens, user)
        App.#database.saveOrder(order)
        order.data.itens.forEach(({product, quantity}) => {
            if(product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if(product instanceof Posters) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}