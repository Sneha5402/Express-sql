
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('students', 'email', 'emailid');
    await queryInterface.renameColumn('courses', 'Staff_name', 'Staff');
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('students', 'emailid', 'email');
    await queryInterface.renameColumn('courses', 'Staff', 'Staff_name');

  }
};
