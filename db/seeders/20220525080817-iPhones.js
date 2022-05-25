module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Devices", [
      { name:"iPhone 10",info: "Смартфон Apple iPhone SE 2020 64 ГБ белый",price:45999,img:'/images/1.jpg.webp',new_device:true,used_device:false ,type_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { name:"iPhone 10",info: "Смартфон Apple iPhone SE 2020 64 ГБ черный",price:75999,img:'/images/2.jpg.webp',new_device:true,used_device:false ,type_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { name:"iPhone 9",info: "Смартфон Apple iPhone SE 2020 64 ГБ красный",price:44999,img:'/images/3.jpg.webp',new_device:true,used_device:false ,type_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { name:"iPhone 10",info: "Смартфон Apple iPhone SE 2020 64 ГБ белый",price:45999,img:'/images/4.jpg.webp',new_device:false,used_device:true ,type_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { name:"iPhone 11",info: "Смартфон Apple iPhone SE 2020 64 ГБ белый",price:59399,img:'/images/5.jpg.webp',new_device:false,used_device:true ,type_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { name:"iPhone 10",info: "Смартфон Apple iPhone SE 2020 64 ГБ белый",price:38200,img:'/images/6.jpg.webp',new_device:true,used_device:false ,type_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { name:"iPhone 12",info: "Смартфон Apple iPhone SE 2020 64 ГБ фиолетовый",price:39400,img:'/images/7.jpg.webp',new_device:true,used_device:false ,type_id: 1,createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface) {
     await queryInterface.bulkDelete("Devices");
  },
};
