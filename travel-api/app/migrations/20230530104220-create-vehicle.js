'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _) {
    await queryInterface.dropTable('Vehicles');
  }
};