'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    
    static associate(models) {
    }
  }
  Role.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        auto_increment: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Role'
    }
  );
  return Role;
};
