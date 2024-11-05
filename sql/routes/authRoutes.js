const express = require('express');
const router = express.Router();
const generateAccessToken = require('../utils/tokenUtils');
const Student = require('../models/students'); 

// Login route to generate and return a token
router.post('/login', async (req, res) => {
  const { email } = req.body;

  try {
    const student = await Student.findOne({ where: { email } });

    if (!student) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = generateAccessToken();
     console.log('Generated Token:', token);
     console.log('Token Type:', typeof token);
    await student.update({ token });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed', error });
  }
});

module.exports = router;
