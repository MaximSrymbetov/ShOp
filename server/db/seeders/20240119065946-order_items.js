'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Order_items', [{
        product_id: 1,
        order_id:1,
        quantity:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        order_id:2,
        quantity:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
   
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Order_items', null, {});

  }
};
