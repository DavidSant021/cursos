const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

// Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração de arquivos estáticos
app.use(express.static('public'))

// Configuração para ler dados da requisição
app.use(express.urlencoded({extended: true}))

// Rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}`))