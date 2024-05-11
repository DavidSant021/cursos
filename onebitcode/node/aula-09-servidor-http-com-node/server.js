const http = require('node:http');

// Criação do servidor
const server = http.createServer((req, res) => {
    const path = req.url

    switch (path) {
        case '/':
            res.writeHead(200)
            res.write('Você está na página inicial!')
            break
        case '/artigos':
            res.writeHead(200)
            res.write('Você está na página de artigos!')
            break
        default:
            res.writeHead(404)
            res.write('Caminho não encontrado!')
            break
    }

    res.end()
});

const PORT = 3000
server.listen(PORT, () => {
    console.log("Servidor Ativo!")
})