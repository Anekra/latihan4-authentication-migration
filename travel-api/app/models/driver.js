'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    static associate(models) {
      Driver.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user_driver',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Driver.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      driver_name: DataTypes.STRING,
      name: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      gender: DataTypes.ENUM('Male', 'Female'),
      license_type: DataTypes.ENUM('SIM A', 'SIM B1'),
      license_number: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'Driver',
      timestamps: false
    }
  );
  return Driver;
};
