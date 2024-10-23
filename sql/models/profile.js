const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./students');

const Profile = sequelize.define('profiles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'students', 
      key: 'id',
    },
  },
}, {
  paranoid: true,
});



module.exports = Profile;


