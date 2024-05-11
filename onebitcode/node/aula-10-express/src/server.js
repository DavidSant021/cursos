const express = require('express')

const server = express()

server.get('/', (request, response) => {
    response.send('Servidor Express funcionando!\nVocê está na página inicial.')
})

server.get('/artigos', (re, res) => {
    res.send('Você está na página de artigos.')
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}/`)
})