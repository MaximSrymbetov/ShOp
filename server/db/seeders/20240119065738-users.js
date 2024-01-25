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
          name: 'Александр',
          phone: '89568911418',
          email: 'jop_acusito73@mail.com',
          password: await bcrypt.hash('123456789', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Павел',
          phone: '89504007399',
          email: 'pasha.sudacov@mail.ru',
          password: await bcrypt.hash('GreayD23451', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Максим',
          phone: '89029220714',
          email: 'maxim.syyleyanov@mail.ru',
          password: await bcrypt.hash('Seed@1977', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Анастасия',
          phone: '89231197234',
          email: 'kiryanova.anastasya@mail.ru',
          password: await bcrypt.hash('derFas2324', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шамсудин',
          phone: '89412378975',
          email: 'shamsydin.dehatovich@mail.ru',
          password: await bcrypt.hash('123456789', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Светлана',
          phone: '89991273485',
          email: 'fadeeva.svetlana@mail.ru',
          password: await bcrypt.hash('123456789', 10),
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Юрий',
          phone: '89136281841',
          email: 'yayura@mail.ru',
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
