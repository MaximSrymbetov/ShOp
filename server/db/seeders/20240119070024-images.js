'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Images', [{
        product_id: 1,
        src:"https://ae01.alicdn.com/kf/HTB1XWErRFXXXXa8XXXXq6xXFXXXt.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        src:"https://ae01.alicdn.com/kf/H62675a7cf8d4452984bc38fbb9d9e1827.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Images', null, {});
    
  }
};
