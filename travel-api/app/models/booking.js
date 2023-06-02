'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Customer, {
        foreignKey: 'customer_id',
        as: 'customer_booking',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Booking.belongsTo(models.Payment, {
        foreignKey: 'payment_id',
        as: 'payment_booking',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Booking.belongsTo(models.Schedule, {
        foreignKey: 'schedule_id',
        as: 'schedule_booking',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Booking.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      customer_id: DataTypes.UUID,
      payment_id: DataTypes.STRING,
      schedule_id: DataTypes.STRING,
      vehicle_id: DataTypes.STRING,
      booking_status: DataTypes.ENUM(
        'Active',
        'Success',
        'Pending',
        'Expired',
        'Canceled'
      )
    },
    {
      sequelize,
      modelName: 'Booking'
    }
  );
  return Booking;
};
