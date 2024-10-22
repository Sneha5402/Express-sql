'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [
      {
        course_name: 'Math 101',
        Staff_name: 'Professor A',
        marks: 85,
        studentId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        course_name: 'History 202',
        Staff_name: 'Professor B',
        marks: 90,
        studentId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
