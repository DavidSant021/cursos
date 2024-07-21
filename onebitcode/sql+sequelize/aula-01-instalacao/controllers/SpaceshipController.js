const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceships");

module.exports = {
  store: async (req, res) => {
    const { capId } = req.params;
    const { name, capacity } = req.body;
    const cap = Cap.findByPk(capId);

    if (!cap) {
      res.send("Erro! Este capitão não está cadastrado!");
    }

    const [spaceships] = await Spaceship.findOrCreate({
      where: { name, capacity },
    });

    await cap.addSpaceship(spaceships);

    res.status(201).json(spaceships);
  },

  index: async (req, res) => {
    const { capId } = req.params;

    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });

    res.status(200).json(cap);
  },
};
