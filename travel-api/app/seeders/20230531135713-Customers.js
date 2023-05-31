'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert(
      'Customers',
      [
        {
          email: 'customer1@example.com',
          password: 'password1',
          name: 'customer 1',
          contact_number: '1234567890',
          gender: 'Male',
          birth_date: '1990-01-01'
        },
        {
          email: 'customer2@example.com',
          password: 'password2',
          name: 'customer 2',
          contact_number: '0987654321',
          gender: 'Female',
          birth_date: '1995-05-15'
        },
        {
          email: 'customer3@example.com',
          password: 'password3',
          name: 'customer 3',
          contact_number: '1435974554',
          gender: 'Female',
          birth_date: '1998-01-12'
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
