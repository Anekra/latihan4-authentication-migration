'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {}
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
