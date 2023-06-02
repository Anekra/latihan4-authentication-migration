'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    static associate(models) {
      Destination.belongsToMany(models.Schedule, {
        through: 'schedule_details',
        foreignKey: {
          name: 'destination_id',
          type: DataTypes.STRING
        },
        otherKey: {
          name: 'schedule_id',
          type: DataTypes.STRING
        }
      });
    }
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
