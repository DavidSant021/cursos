const express = require('express')
const gamesController = require('./controllers/games-controller')

const app = express()

// Receber request json e converter para um objeto javascript
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Helo, world!' })
})

app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)

app.post('/games', gamesController.save)
app.post('/games/:id/genres', gamesController.addGenre)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado! Rodando em http://localhost:${PORT}`))