'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({Device}) {
      this.belongsTo(Device, { foreignKey: 'device_id' });
    }
  }
  Order.init({
    device_id: DataTypes.INTEGER,
    new_dev: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
