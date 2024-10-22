const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'sneha', {
  host: 'localhost',
  dialect: 'mariadb', 
});


module.exports = sequelize;
