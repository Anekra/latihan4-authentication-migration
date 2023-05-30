'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    static associate(models) {}
  }
  Driver.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      driver_name: DataTypes.STRING,
      name: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      gender: DataTypes.ENUM('Male', 'Female'),
      license_type: DataTypes.ENUM('SIM A', 'SIM B1'),
      license_number: DataTypes.STRING,
      birth_date: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Driver'
    }
  );
  return Driver;
};
