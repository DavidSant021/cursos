const express = require("express")
const router = express.Router()

const PlanetController = require("../controllers/PlanetController")

router.get('/planets', PlanetController.index)
router.post('/planets', PlanetController.store)
router.put('/planets/:id', PlanetController.update)
router.delete('/planets/:id', PlanetController.delete)

module.exports = router