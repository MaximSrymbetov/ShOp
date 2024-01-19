'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Product_Sizes', [{
        product_id:1,
        size_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('Product_Sizes', null, {});
    
  }
};
