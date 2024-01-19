'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Products', [{
        category_id: 1,
        gender_id: 1,
        name:'РУБАШКА-MAN',
        description:'КРУТАЯ и СТИЛЬНАЯ РУБАШКА-MAN',
        price:'8200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        gender_id: 2,
        name:'кроссы-вуMAN',
        description:'кроссы и новые брендовые',
        price:'88200',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  async down (queryInterface, Sequelize) {
  
  
   
      await queryInterface.bulkDelete('Products', null, {});
  
  }
};
