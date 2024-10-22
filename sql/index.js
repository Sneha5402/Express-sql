const sequelize = require('./config/database')
const Student = require('./models/students');
const course = require('./models/courses');
const Profile = require('./models/profile'); 
const { Op, fn, col } = require('sequelize');

async function sync() {
  try {
    await sequelize.sync({ force: true });

    const students = await Student.bulkCreate([
      { name: "Sneha S", emailid: "snehasakthi02@gmail.com", age: 22 },
      { name: "John Doe", emailid: "johndoe@gmail.com", age: 25 },
      { name: "Priya", emailid: "priyae@gmail.com", age: 16 },
      { name: "Sakthi", emailid: "sneha02@gmail.com", age: 25 },
      { name: "Doe", emailid: "john@gmail.com", age: 26 },
      { name: "Alexa", emailid: "priya@gmail.com", age: 27 },
    ]);
    console.log("All students:", students);

    const courseInstance = await course.bulkCreate([
      { course_name: "Maths", Staff_name: "Mala", marks: 90, studentId: students[3].id },
      { course_name: "Science", Staff_name: "Kavitha", marks: 85, studentId: students[2].id },
      { course_name: "Social", Staff_name: "Kavya", marks: 88, studentId: students[5].id },
      { course_name: "Geo", Staff_name: "Sam", marks: 70, studentId: students[1].id },
    ]);
    console.log("Courses created:", courseInstance);

      
  // Create profiles for each student
  for (const student of students) {
    await Profile.create({
      bio: `${student.name} is studying at their college.`,
      avatar: `https://api.adorable.io/avatars/285/${student.emailid}`,
      studentId: student.id, // Linking profile to student
    });
  }

  console.log("Profiles created successfully.");

    // // table rename
    //     const rename= await sequelize.query('ALTER TABLE students RENAME TO newstudents');
    //     console.log(rename);

    // // column name change
    // const column=await sequelize.query('ALTER TABLE students RENAME COLUMN emailid TO email');
    // console.log(column);

    // // drop the column
    // const drop=await sequelize.query('ALTER TABLE students DROP COLUMN age');
    // console.log('Column deleted successfully.',drop);

    // // delete the row
    //        const deletedRows = await Student.destroy({
    //       where: {
    //         id: 4
    //       }
    //     });
    //     console.log("delete",deletedRows)

    // // update the user
    // const updatedStudent = await Student.update(
    //   { emailid: 'updatedemail@gmail.com' },
    //   {
    //     where: { id: 3}
    //   }
    // );
    // console.log("Updated student:", updatedStudent);

    // // Use GROUP BY and COUNT to get student count by age
    // const ageGroupCount = await Student.findAll({
    //   attributes: ['age', [fn('COUNT', col('age')), 'count']],
    //   group: ['age'],
    //   limit: 2,
    //   offset: 1,
    //   raw: true
    // });
    // console.log("Student count by age:", ageGroupCount);

    // // operators
    // const student = await Student.findAll({
    //   where: {
    //     age: {
    //       [Op.gte]: 25, // Greater than or equal to 18
    //     },
    //     name: {
    //       [Op.like]: '%John%', 
    //     }
    //   }
    // });
    // console.log("Student count by age:", student);

    // const studentss = await Student.findAll({
    //   attributes: [
    //     'name',
    //     [fn('AVG', col('age')), 'averageAge'] 
    //   ],
    //   raw:true
    // });
    // console.log("Student count by age:", studentss);

    // // Joins
    // const studentsWithStaff = await Student.findAll({
    //   include: [
    //     {
    //       model: course,
    //       attributes: ['Staff_name'],
    //       required: true,
    //     }
    //   ],
    //   attributes: ['id', 'name', 'emailid', 'age'],
    // });

    // console.log(JSON.stringify(studentsWithStaff,null,2));



    // // Soft delete a student
    // const deletedRows = await Student.destroy({
    //   where: { id: 3 },
    // });
    // console.log("Soft deleted student:", deletedRows);

    // // Fetch the soft-deleted student (with paranoid option disabled)
    // const softDeletedStudent = await Student.findOne({
    //   where: { id: 3 },
    //   paranoid: false,
    // });
    // console.log("Soft deleted student found:", softDeletedStudent);

  } catch (error) {
    console.log(error);
  }
}
sync();


//     // Drop all tables in the database
// async function dropAllTables() {
//   try {
//     await sequelize.drop();
//     console.log('All tables dropped successfully.');
//   } catch (error) {
//     console.log('Error dropping tables:', error);
//   }
// }
// console.log("All students:", dropAllTables);
// dropAllTables();













