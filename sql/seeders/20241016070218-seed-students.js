'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      try {
          await queryInterface.bulkInsert('students', [
            {
              id:8,
              name: ' Doe',
              email: 'john.do@ee2.com',
              age: 20,
              createdAt: new Date(),
              updatedAt: new Date(),
              deletedAt: null,
            },
            {
              id:9,
              name: 'Jane ',
              email: 'jane.mith@ee2.com',
              age: 22,
              createdAt: new Date(),
              updatedAt: new Date(),
              deletedAt: null,
            },
          ], {});
      } catch (error) {
          console.error('Seeding error:', error);
      }
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Students', null, {});
  }
};
