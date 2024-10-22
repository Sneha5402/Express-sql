'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('courses', 'marks', 'grade');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('courses', 'grade', 'marks');
  }
};

