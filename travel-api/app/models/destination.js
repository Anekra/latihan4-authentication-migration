'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    static associate(models) {}
  }
  Destination.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      destination_name: DataTypes.STRING,
      description: DataTypes.STRING,
      image_url: DataTypes.STRING,
      rating: DataTypes.DOUBLE
    },
    {
      sequelize,
      modelName: 'Destination'
    }
  );
  return Destination;
};
