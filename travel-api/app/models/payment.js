'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.hasOne(models.Booking, {
        foreignKey: 'payment_id',
        as: 'payment',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Payment.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      total_amount_due: DataTypes.DOUBLE,
      total_amount_given: DataTypes.DOUBLE,
      total_change: DataTypes.DOUBLE,
      payment_status: DataTypes.ENUM(
        'Success',
        'Pending',
        'Canceled',
        'Expired'
      )
    },
    {
      sequelize,
      modelName: 'Payment'
    }
  );
  return Payment;
};
