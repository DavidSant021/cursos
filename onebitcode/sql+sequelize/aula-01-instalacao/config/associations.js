const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");

//Planeta tem um satelite
Planet.hasOne(Satellite, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//Satelite pertence a um planeta
Satellite.belongsTo(Planet, {
  foreingKey: "planetId",  // Especifica que a chave estrangeira na tabela Satellite é planetId, que referenciará a chave primária do Planet
  as: "planet", // Define um alias para a relação, permitindo acessar o Planet associado a um Satellite usando a chave planet
});

module.exports = { Planet, Satellite };
