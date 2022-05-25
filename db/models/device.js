'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate({Type,Order}) {
      this.belongsTo(Type, { foreignKey: 'type_id' });
      this.hasMany(Order, { foreignKey: 'device_id' });
    }
  }
  Device.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    new_device: DataTypes.BOOLEAN,
    used_device: DataTypes.BOOLEAN,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};


