const Student = require('../models/students'); 

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[0];
  console.log(authHeader.split(' '),authHeader.split(' ')[0])

  if (!token) return res.status(401).json({ message: 'Token missing' });

  try {
    // Find the user by token
    const student = await Student.findOne({ where: { token } });

    if (!student) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Check if the token has expired
    if (Date.now() > student.tokenExpiresAt) {
      return res.status(403).json({ message: 'Token has expired' });
    }

    // Attach user info to request for further processing
    req.student = student;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Failed to authenticate token', error });
  }
};

module.exports = authenticateToken;

