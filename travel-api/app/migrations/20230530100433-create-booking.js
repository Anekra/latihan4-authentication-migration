'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Customer',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      payment_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Payment',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      schedule_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Schedule',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      vehicle_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Vehicle',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      booking_status: {
        allowNull: false,
        type: Sequelize.ENUM('Active', 'Success', 'Pending', 'Expired', 'Canceled')
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
    await queryInterface.dropTable('Bookings');
  }
};