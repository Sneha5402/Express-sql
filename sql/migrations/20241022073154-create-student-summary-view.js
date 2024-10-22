'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
            CREATE VIEW student_summary AS
            SELECT 
                s.id,
                s.name,
                c.course_name
            FROM 
                students s
            JOIN 
                  courses c ON s.Id = c.id;
        `);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
            DROP VIEW IF EXISTS student_summary;
        `);
    }
};
