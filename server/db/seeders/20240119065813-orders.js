'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          user_id: 2,
          status: 'created',
          total: '12720',
          delivery_status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          status: 'confirmed',
          total: '4300',
          delivery_status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          status: 'payed',
          total: '23532',
          delivery_status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          status: 'delivery',
          total: '27340',
          delivery_status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          status: 'closed',
          total: '10070',
          delivery_status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          status: 'delivery',
          total: '8650',
          delivery_status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          status: 'closed',
          total: '34700',
          delivery_status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
