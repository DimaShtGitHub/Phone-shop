'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate({Type,Order,Galerey}) {
      this.belongsTo(Type, { foreignKey: 'type_id' });
      this.hasMany(Order, { foreignKey: 'device_id' });
      this.hasMany(Galerey, {foreignKey: 'device_id',
      });
    }
  }
  Device.init({
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    new_device: DataTypes.BOOLEAN,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};


