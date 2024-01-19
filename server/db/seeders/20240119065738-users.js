const bcrypt = require('bcrypt');
('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'ADMIN',
          phone: '88005553555',
          email: 'I_am_ADMIN@mail.ru',
          password: await bcrypt.hash('123456789', 10),
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Klient',
          phone: '8909',
          email: 'I_am_NOT_ADMIN@mail.ru',
          password: await bcrypt.hash('123456789', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
