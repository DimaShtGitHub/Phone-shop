'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
     static associate({ Device }) {
      this.hasMany(Device, { foreignKey: 'type_id' });
    }
  }
  Type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
