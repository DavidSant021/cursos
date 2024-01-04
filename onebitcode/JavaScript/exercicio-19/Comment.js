class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.createAt = new Date()
    }
}

module.exports = Comment