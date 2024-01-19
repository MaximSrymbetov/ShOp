'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Reviews', [{
      user_id: 2,
      product_id: 1,
      text:'КРУТАЯ ВЕЩЬ',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        user_id: 2,
        product_id: 2,
        text:'НУ БЛИИИН ПОЧЕМУ ТАААК ДОРОГо:(',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});
  
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Reviews', null, {});
   
  }
};
