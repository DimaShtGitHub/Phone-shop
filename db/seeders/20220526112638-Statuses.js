'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [
      { name: "Новый", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ожидает звонка", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ожидает отправки", createdAt: new Date(), updatedAt: new Date() },
      { name: "Отправлен", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ожидает получения", createdAt: new Date(), updatedAt: new Date() },
      { name: "Завершен", createdAt: new Date(), updatedAt: new Date() },
      { name: "Отменен", createdAt: new Date(), updatedAt: new Date() },
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
