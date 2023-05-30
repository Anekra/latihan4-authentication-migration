'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {}
  }
  Schedule.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      destination_id: DataTypes.STRING,
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
