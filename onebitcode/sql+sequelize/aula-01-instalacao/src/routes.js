const express = require("express");
const router = express.Router();

const PlanetController = require("../controllers/PlanetController");
const SatelliteController = require("../controllers/SatelliteController");

router.get("/planets", PlanetController.index);
router.post("/planets", PlanetController.store);
router.put("/planets/:id", PlanetController.update);
router.delete("/planets/:id", PlanetController.delete);

router.post("/planets/:planetId/satellites", SatelliteController.store);
router.get("/planets/:planetId/satellites", SatelliteController.index);

module.exports = router;
