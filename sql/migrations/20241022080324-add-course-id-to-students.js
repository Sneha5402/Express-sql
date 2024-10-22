'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('students', 'course_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'courses',
                key: 'id' 
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL', 
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('students', 'course_id');
    }
};
