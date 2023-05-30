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
      booking_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Booking',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        type: Sequelize.ENUM('Success', 'Pending', 'Cancel', 'Expired')
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
  async down(queryInterface, _) {
    await queryInterface.dropTable('Payments');
  }
};