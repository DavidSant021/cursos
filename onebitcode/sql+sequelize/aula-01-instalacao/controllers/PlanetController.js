const Planet = require("../models/Planet");

module.exports = {
  store: async (req, res) => {
    const { name, position } = req.body;

    try {
      const planet = await Planet.create({ name, position });
      res.status(201).json(planet);
    } catch (error) {
      res.status(401).json(error.message);
    }
  },

  index: async (req, res) => {
    try {
      const planets = await Planet.findAll();
      res.status(200).json(planets);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, position } = req.body;

    try {
      updatedPlanet = await Planet.update(
        { name, position },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(201).send("Planeta atualizado com sucesso!");
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await Planet.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).send("Planete excluido com sucesso!");
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
