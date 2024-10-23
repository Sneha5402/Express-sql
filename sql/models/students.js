const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./courses');
const Profile = require('./profile');

const Student = sequelize.define('students', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      len: [3, 10], 
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
      min: 18, 
    },
  },
  college: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'MIT', 
  },
}, {
  paranoid: true,
});

// Define associations
Student.hasMany(Course);
Course.belongsTo(Student);

Student.hasOne(Profile);
Profile.belongsTo(Student);

async function alterTable() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Table altered successfully.");
  } catch (error) {
    console.error("Error altering the table:", error);
  }
}
alterTable();

console.log(Student === sequelize.models.Student);

module.exports = Student;


// // Adding a student with age 16 should throw a validation error
// async function createStudent() {
//   try {
//     await Student.create({
//       name: 'John',
//       email: 'john@example.com',
//       age: 16, 
//     });
//   } catch (error) {
//     console.error("Validation error:", error.errors[0].message);
//   }
// }

// createStudent();
