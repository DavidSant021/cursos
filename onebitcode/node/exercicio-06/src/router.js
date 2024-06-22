const express = require('express')
const playlistsController = require('./controllers/playlistController')

const router = express.Router()

router.get('/', playlistsController.index)
router.get('/:id', playlistsController.show)
router.post('/', playlistsController.save)
router.put('/:id', playlistsController.update)
router.delete('/:id', playlistsController.delete)
router.post('/:id/musics', playlistsController.addMusic)
router.delete('/playlistId/musics/musicId', playlistsController.removeMusic)

module.exports = router