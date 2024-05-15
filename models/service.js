'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.Category)
      Service.hasMany(sequelize.define('Price'))
    }
  }
  Service.init({
    CategoryID: DataTypes.INTEGER,
    ServiceName: DataTypes.STRING,
    Type: DataTypes.STRING,
    Price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};