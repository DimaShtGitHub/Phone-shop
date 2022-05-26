'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Galerey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.belongsTo(models.Device, {
         foreignKey: 'device_id'
      });
      }
  }
  Galerey.init({
    device_id: DataTypes.INTEGER,
    img: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Galerey',
  });
  return Galerey;
};
