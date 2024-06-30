const users = require("../models/user")

module.exports = {
    // GET /users
    index: (req, res) => {
        const allUsers = users.findAll()
        res.json(allUsers)
    },

    // GET /users/:id
    show: (req, res) => {
        const { id } = req.params

        const user = users.findById(id)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.json(user)
    },

    // POST /users
    save: (req, res) => {
        const { name, email, password, role } = req.body

        if (
            typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' ||
            typeof role !== 'string' || !role.match(/^(admin|standard)$/)
        ) {
            return res.status(400).json({ message: 'Invalid fields!' })
        }

        const newUser = users.createUser(name, email, password, role)

        if (!newUser) {
            return res.status(400).json({ message: 'Email arleady in use' })
        }

        res.status(201).json(newUser)
    },

    // DELETE /users/:id
    delete: (req, res) => {
        const { id } = req.params

        const user = users.findById(id)

        if (!user) return res.status(404).json({ message: 'User not found' })

        const deletedUser = users.deleteUser(id)

        if (!deletedUser) return res.status(400).json({ message: "Couldn't delete user" })

        res.json(deletedUser)
    }
}