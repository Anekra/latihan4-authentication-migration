'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert(
      'Destinations',
      [
        {
          id: 'destination001',
          destination_name: 'Bogor',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias.',
          image_url: 'https://unsplash.com/photos/jh87-zD5tyo',
          rating: '3',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'destination002',
          destination_name: 'Jakarta',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias. Lorem ipsum dolor sit amet.',
          image_url: 'https://unsplash.com/photos/P5d3B3oZLqw',
          rating: '3',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'destination003',
          destination_name: 'Bandung',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          image_url: 'https://unsplash.com/photos/fQHdNpP9JRU',
          rating: '3',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'destination004',
          destination_name: 'Semarang',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolor sit.',
          image_url: 'https://unsplash.com/photos/_XfxFa-yjoY',
          rating: '3',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Destinations', null, {});
  }
};
