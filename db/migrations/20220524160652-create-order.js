'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: {
           tableName: 'Devices',
         },
         key: 'id',
       },       
      },
      status_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
          model: {
           tableName: 'Statuses',
         },
         key: 'id',
       },       
      },
      new_dev: {
        type: Sequelize.BOOLEAN
      },
      name: {
       type: Sequelize.STRING       
      },
      number: {
        type: Sequelize.STRING       
       },
       comment: {
        type: Sequelize.STRING       
       },
       url: {
        type: Sequelize.STRING       
       },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
