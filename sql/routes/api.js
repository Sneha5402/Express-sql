const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');


// A protected route that requires authentication
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', student: req.student });
});
module.exports = router;
