const express = require('express')
const path = require('node:path')
const router = require('./routes')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'palavra-chave-secreta', // ahadswd375fbsjdkasd798
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(router)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado! Rodando em http://localhost:${PORT}`))