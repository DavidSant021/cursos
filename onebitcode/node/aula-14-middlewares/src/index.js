const express = require('express')
const uploadMiddlewares = require('./middlewares/upload')
// const middlewareC = require('./middlewares/middleware-c')

const app = express()

app.use(express.static('public'))

// app.use(middlewareC)

// app.use(function (req, res, next) {
//     console.log('Executando middleware A')
//     req.middlewareA = 'OK!'
//     next()
// })

// function middlewareB(req, res, next) {
//     console.log('Executando middleware B')
//     req.middlewareB = 'OK!'
//     next()
// }

// app.get('/testeA', (req, res) => {
//     console.log({a: req.middlewareA, b: req.middlewareB})
//     res.end()
// })

// app.get('/testeB', middlewareB, (req, res) => {
//     console.log({a: req.middlewareA, b: req.middlewareB})
//     res.end()
// })

// app.use(function(err, req, res, next) {
//     if(err) {
//        console.log(err.message)
//        res.status(400)
//        res.json({message: err.message}) 
//     } else {
//         next()
//     }
// })

app.post('/upload', uploadMiddlewares.single('image'), (req, res) => {
    console.log(req.file, req.body)
    res.json({ message: 'Arquivo salvo com sucesso!' })
})

const PORT = 3000
app.listen(PORT, () => console.log('Servidor iniciado!'))