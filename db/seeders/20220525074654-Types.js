module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Types", [
      { name: "iPhone", createdAt: new Date(), updatedAt: new Date() },
      { name: "iPad", createdAt: new Date(), updatedAt: new Date() },
      { name: "MacBook", createdAt: new Date(), updatedAt: new Date() },
      { name: "Аксессуары", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
     await queryInterface.bulkDelete("Types");
  },
};

