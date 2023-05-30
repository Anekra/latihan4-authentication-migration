'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {}
  }
  Vehicle.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      vehicle_name: DataTypes.STRING,
      vehicle_type: DataTypes.STRING,
      year: DataTypes.DATE,
      manufacturer: DataTypes.STRING,
      model: DataTypes.STRING,
      color: DataTypes.STRING,
      license_plate: DataTypes.STRING,
      mileage: DataTypes.STRING,
      fuel_type: DataTypes.ENUM('gasoline', 'diesel', 'electric'),
      transmission: DataTypes.ENUM('manual', 'automatic')
    },
    {
      sequelize,
      modelName: 'Vehicle'
    }
  );
  return Vehicle;
};
