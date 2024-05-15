'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicePriceOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServicePriceOption.init({
    Duration: DataTypes.INTEGER,
    Price: DataTypes.STRING,
    Type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServicePriceOption',
  });
  return ServicePriceOption;
};