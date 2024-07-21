const Cap = require("../models/Cap");
const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");
const Spaceships = require("../models/Spaceships");

// Planeta tem varios satelites
Planet.hasMany(Satellite, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Satelite pertence a um planeta
Satellite.belongsTo(Planet, {
  foreingKey: "planetId", // Especifica que a chave estrangeira na tabela Satellite é planetId, que referenciará a chave primária do Planet
  as: "planet", // Define um alias para a relação, permitindo acessar o Planet associado a um Satellite usando a chave planet
});

Cap.belongsToMany(Spaceships, {
  // Cap pertence a varias spaceships
  foreingKey: "capId", // Chave estrangeira que o cap está relacionado
  through: "capSpaceship", // Tabela que faz ligação entre eles
  as: "spaceships",
});

Spaceships.belongsToMany(Cap, {
  foreingKey: "spaceshipId",
  through: "capSpaceship",
  as: "caps",
});

module.exports = { Planet, Satellite };
