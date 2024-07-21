const Cap = require("../models/Cap");

module.exports = {
  store: async (req, res) => {
    const { name, registerNumber } = req.body;

    const cap = await Cap.create({ name, registerNumber });

    res.status(201).json(cap);
  },

  index: async (req, res) => {
    const cap = Caps.findAll();

    res.status(200).json(cap);
  },
};
