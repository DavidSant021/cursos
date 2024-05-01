const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 404;
    res.end('<h1>Hello World</h1>');
});

server.listen(3000, () => {
    console.log("Servidor Ativo!")
})