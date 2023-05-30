'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {}
  }
  Customer.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      gender: DataTypes.ENUM('Male', 'Female'),
      birth_date: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Customer'
    }
  );
  return Customer;
};
