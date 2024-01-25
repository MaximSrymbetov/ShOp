'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Order_items',
      [
        {
          product_id: 1,
          order_id: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 10,
          order_id: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 26,
          order_id: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          order_id: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 15,
          order_id: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 29,
          order_id: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 11,
          order_id: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 17,
          order_id: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 43,
          order_id: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 26,
          order_id: 4,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          order_id: 4,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 35,
          order_id: 4,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 21,
          order_id: 4,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 23,
          order_id: 5,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 28,
          order_id: 5,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 11,
          order_id: 5,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 36,
          order_id: 6,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 24,
          order_id: 6,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 49,
          order_id: 6,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 28,
          order_id: 6,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Order_items', null, {});
  },
};
