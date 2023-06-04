'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: 'user_roles',
        foreignKey: 'roleId',
        otherKey: 'userId'
      })
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
      name: DataTypes.STRING,
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
      modelName: 'Role',
      timestamps: false
    }
  );
  return Role;
};
