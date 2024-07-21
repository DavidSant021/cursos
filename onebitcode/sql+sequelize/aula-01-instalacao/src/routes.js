const express = require("express");
const router = express.Router();

const PlanetController = require("../controllers/PlanetController");
const SatelliteController = require("../controllers/SatelliteController");
const CapController = require("../controllers/CapController");
const SpaceshipController = require("../controllers/SpaceshipController");

router.get("/planets", PlanetController.index);
router.post("/planets", PlanetController.store);
router.put("/planets/:id", PlanetController.update);
router.delete("/planets/:id", PlanetController.delete);

router.post("/planets/:planetId/satellites", SatelliteController.store);
router.get("/planets/:planetId/satellites", SatelliteController.index);

router.post("/cap", CapController.store);
router.get("/cap", CapController.index);

router.post("/caps/:capId/spaceships", SpaceshipController.store);
router.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = router;
