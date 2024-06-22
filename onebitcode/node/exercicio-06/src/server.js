const express = require('express')
const router = require('./router')
const app = express()

app.use(express.json())

app.use('/api/playlists', router)

const PORT = 3000
app.listen(PORT, () => console.log('Servidor iniciado!'))