'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Order_infos',
      [
        {
          order_id: 1,
          address: 'КАКАЯ-то УЛИЦА',
          phone: '8-999',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 2,
          address: ' райское место КАКАЯ-то УЛИЦА',
          phone: '+9-999',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Order_infos', null, {});
  },
};
