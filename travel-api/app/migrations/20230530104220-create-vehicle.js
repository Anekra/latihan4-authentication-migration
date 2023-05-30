'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicle_name: {
        type: Sequelize.STRING
      },
      vehicle_type: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.DATE
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      license_plate: {
        type: Sequelize.STRING
      },
      mileage: {
        type: Sequelize.INTEGER
      },
      fuel_type: {
        type: Sequelize.ENUM('gasoline', 'diesel', 'electric')
      },
      transmission: {
        type: Sequelize.ENUM('manual', 'automatic')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};