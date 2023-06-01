'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert(
      'Vehicles',
      [
        {
          vehicle_name: 'Car A',
          vehicle_type: 'Sedan',
          year: new Date(2022, 0, 1),
          manufacturer: 'Manufacturer A',
          model: 'Model A',
          color: 'Red',
          license_plate: 'ABC123',
          mileage: 5000,
          fuel_type: 'gasoline',
          transmission: 'automatic'
        },
        {
          vehicle_name: 'Car B',
          vehicle_type: 'SUV',
          year: new Date(2020, 0, 1),
          manufacturer: 'Manufacturer B',
          model: 'Model B',
          color: 'Blue',
          license_plate: 'XYZ789',
          mileage: 10000,
          fuel_type: 'diesel',
          transmission: 'manual'
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
