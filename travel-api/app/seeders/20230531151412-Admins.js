'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          username: 'admin 1',
          email: 'admin1@example.com',
          password: 'password1'
        },
        {
          username: 'admin 2',
          email: 'admin2@example.com',
          password: 'password1'
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
