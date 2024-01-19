'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Genders', [{
        name:'MAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'WOMAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Genders', null, {});
   
  }
};
