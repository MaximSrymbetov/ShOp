'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          product_id: 1,
          src: 'https://ae01.alicdn.com/kf/HTB1XWErRFXXXXa8XXXXq6xXFXXXt.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          src: 'https://ae01.alicdn.com/kf/H62675a7cf8d4452984bc38fbb9d9e1827.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          src: '/img/forseLowWhiteAndBlue.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          src: '/img/forseLowWhiteAndBlue.1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          src: '/img/forseLowWhiteAndBlue.3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          src: '/img/forseLowWhiteAndBlue.4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.5.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.6.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          src: '/img/forseFontanka.7.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          src: '/img/Yeezy500.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          src: '/img/Yeezy500.2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          src: '/img/Yeezy500.3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          src: '/img/Yeezy.5.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          src: '/img/forse1white.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          src: '/img/forse1white.2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          src: '/img/forse1white.3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          src: '/img/forse1white.4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          src: '/img/forse1white.5.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          src: '/img/forse1white.6.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
