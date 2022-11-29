'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.items, {foreignKey: 'userID'})
      models.users.hasMany(models.transactions, {foreignKey: 'userID'})
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};