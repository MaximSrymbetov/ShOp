'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Sizes', [{
        name:"РАЗМЕРНАЯ СЕТКА",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Sizes', null, {});
   
  }
};
