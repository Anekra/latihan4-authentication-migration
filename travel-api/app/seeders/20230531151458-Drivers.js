'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert(
      'Drivers',
      [
        {
          email: 'driver1@example.com',
          password: 'password1',
          driver_name: 'driver 1',
          contact_number: '098397523123',
          gender: 'Male',
          license_type: 'SIM B1',
          license_number: '921587',
          birth_date: '1995-01-12'
        },
        {
          email: 'driver2@example.com',
          password: 'password2',
          driver_name: 'driver 2',
          contact_number: '098357523198',
          gender: 'Female',
          license_type: 'SIM A',
          license_number: '920849',
          birth_date: '1996-03-22'
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Drivers', null, {});
  }
};
