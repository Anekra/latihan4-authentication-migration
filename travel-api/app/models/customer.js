'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      contact: DataTypes.STRING,
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