const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');
const Student = require('../models/students');
const seedStudents = require('../seeders/20241016070218-seed-students');
const seedCourses = require('../seeders/20241016070255-seed-courses');
const Course = require('../models/courses');

router.get('/seed/students', async (req, res) => {
    try {
        await seedStudents.up(sequelize.getQueryInterface());
        res.status(200).json({ message: 'Students table seeded successfully' });
    } catch (error) {
        console.error('Error seeding students:', error);
        res.status(500).json({ message: 'Failed to seed students table', error });
    }
});

// Route to get all students
router.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll();
        console.log('Fetched Students:', students);
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Failed to fetch students', error });
    }
});

// Route to get a student by ID
router.get('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        console.log('Fetched Student:', student);
        res.status(200).json(student);
    } catch (error) {
        console.error('Error fetching student by ID:', error);
        res.status(500).json({ message: 'Failed to fetch student', error });
    }
});


// Route to add a new student
router.post('/students', async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const newStudent = await Student.create({
            name,
            email,
            age,
        });
        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ message: 'Failed to add student', error });
    }
});

// Route to update a student by ID
router.put('/students/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, age, email } = req.body; 

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Update specific fields using the instance's update method
        await student.update({
            name: name || student.name,
            email: email || student.email,
            age: age || student.age,
        });

        console.log('Updated Student:', student);
        res.status(200).json(student); 
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ message: 'Failed to update student', error });
    }
});

// Route to update a student by ID
router.patch('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body; // Fields to update

    try {
        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.update({
            name: name || student.name,
            email: email || student.emailid,
            age: age || student.age,
        });

        res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ message: 'Failed to update student', error });
    }
});

// Route to delete a student by ID
router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        await student.destroy();
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Failed to delete student', error });
    }
});

// Courses

router.get('/seed/courses', async (req, res) => {
    try {
        await seedCourses.up(sequelize.getQueryInterface());
        res.status(200).json({ message: 'Courses table seeded successfully' });
    } catch (error) {
        console.error('Erro r seeding courses:', error);
        res.status(500).json({ message: 'Failed to seed courses table', error });
    }
});

// Route to get all courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.findAll();
        console.log('Fetched Students:', courses);
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Failed to fetch students', error });
    }
});

// Route to add a new student
router.post('/courses', async (req, res) => {
    const { course_name, Staff_name, marks} = req.body;

    try {
        const newCourse = await Course.create({
            course_name, Staff_name, marks 
        });
        res.status(201).json(newCourse );
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ message: 'Failed to add student', error });
    }
});

// Route to update a course by ID
router.patch('/courses/:id', async (req, res) => {
    const { id } = req.params;
    const { course_name, Staff_name, marks } = req.body; // Fields to update

    try {
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.update({
            course_name: course_name || course.course_name,
            Staff_name: Staff_name || course.Staff_name ,
            marks: marks || course.marks,
        });

        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Failed to update course', error });
    }
});


// Route to delete a student by ID
router.delete('/courses/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        await course.destroy();
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Failed to delete Course ', error });
    }
});

module.exports = router;
