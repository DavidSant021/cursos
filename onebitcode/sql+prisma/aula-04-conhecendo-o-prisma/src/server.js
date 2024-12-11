const express = require("express")
const usersRouter = require("./routes/users")
const postRouter = require("./routes/posts")
const tagsRouter = require("./routes/tags")

const app = express()

app.use(express.json())
app.use("/api/users", usersRouter)
app.use("/api/posts", postRouter)
app.use("/api/tags", tagsRouter)

app.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'))