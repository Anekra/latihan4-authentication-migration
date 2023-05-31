'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      driver_name: {
        type: Sequelize.STRING
      },
      contact_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('Male', 'Female')
      },
      license_type: {
        allowNull: false,
        type: Sequelize.ENUM('SIM A', 'SIM B1')
      },
      license_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birth_date: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Drivers');
  }
};