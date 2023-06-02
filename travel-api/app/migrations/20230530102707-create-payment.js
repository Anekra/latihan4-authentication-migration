'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      total_amount_due: {
        type: Sequelize.DOUBLE
      },
      total_amount_given: {
        type: Sequelize.DOUBLE
      },
      total_change: {
        type: Sequelize.DOUBLE
      },
      payment_status: {
        type: Sequelize.ENUM('Success', 'Pending', 'Canceled', 'Expired')
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
    await queryInterface.dropTable('Payments');
  }
};