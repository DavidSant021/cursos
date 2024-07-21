"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("capSpaceship", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      capId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "caps", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      spaceshipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "spaceships", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("capSpaceship");
  },
};
