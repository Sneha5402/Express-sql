'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'age');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'age', {
      type: Sequelize.INTEGER,
    });
  }
};
