'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({Device,Status}) {
      this.belongsTo(Device, { foreignKey: 'device_id' });
      this.belongsTo(Status, { foreignKey: 'status_id' });
    }
  }
  Order.init({
    device_id: DataTypes.INTEGER,
    new_dev: DataTypes.BOOLEAN,
    status_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
