const Satellite = require("../models/Satellite");
const Planet = require("../models/Planet");

module.exports = {
  store: async (req, res) => {
    const { planetId } = req.params;
    const { name, serial_number } = req.body;

    const planet = await Planet.findByPk(planetId);

    if (!planet) {
      res.send("Planeta não encontrado!");
    }

    const satellite = await Satellite.create({ name, serial_number, planetId });
    res.status(201).json(satellite);
  },

  index: async (req, res) => {
    const { planetId } = req.params;

    const planet = await Planet.findByPk(planetId, {
      include: Satellite,
    });

    if (!planet) {
      res.send("Planeta não encontrado!");
    }

    res.status(200).json(planet);
  },
};
