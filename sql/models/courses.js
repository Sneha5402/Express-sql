const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./students');

const Course = sequelize.define('courses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Staff_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  studentId: {  
    type: DataTypes.INTEGER,
    references: {
      model: 'students',
      key: 'id',
    }
  },
}, {
  paranoid: true, 
});

module.exports = Course;

