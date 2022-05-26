'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      { device_id: 1,status_id: 2, new_dev: true, name: 'Василий', number: '+79959909931', comment: 'НЕ ЗВОНИТЬ ПОСЛЕ 21:00!', createdAt: new Date(), updatedAt: new Date() },
      { device_id: 4,status_id: 4, new_dev: true, name: 'Светлана', number: '+79010010010', comment: 'ПРИВЕТ АНДРЕЙ', createdAt: new Date(), updatedAt: new Date() },
      { device_id: 5,status_id: 1, new_dev: true, name: 'Валера', number: '+79063342232', comment: '', createdAt: new Date(), updatedAt: new Date() },
      { device_id: 2,status_id: 3, new_dev: true, name: 'НОУ НЕЙМ', number: '+7111111111', comment: 'ДЖАСТ ФОР ТАБЛЕ', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
