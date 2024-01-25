'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Order_infos',
      [
        {
          order_id: 1,
          address: 'Санкт-Петербург Куйбышева 6а',
          phone: '89568911418',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 2,
          address: 'Екатеринбург Карла Маркса 42',
          phone: '89504007399',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 3,
          address: 'Красноярск Мате-Залки 6а',
          phone: '89029220714',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 4,
          address: 'Зеленогорск Ленина 11 к2',
          phone: '89231197234',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 5,
          address: 'Москва Филёвская 16а',
          phone: '89412378975',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 6,
          address: 'Сочи Роз 31',
          phone: '89412378975',
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
