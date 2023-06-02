'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.belongsToMany(models.Destination, {
        through: 'schedule_details',
        foreignKey: 'schedule_id',
        otherKey: 'destination_id'
      })
      Schedule.hasOne(models.Booking, {
        foreignKey: "schedule_id",
        as: "schedule",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Schedule.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      itinerary: DataTypes.TEXT,
      accommodation: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Schedule'
    }
  );
  return Schedule;
};
