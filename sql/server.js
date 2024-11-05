// const express = require('express');
// const seederRoutes = require('./routes/seedroutes'); 

// const app = express();
// app.use(express.json());   

// app.use('/api', seederRoutes);

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
//   });

const express = require('express');
const seederRoutes = require('./routes/seedroutes');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes); // Route for login
app.use('/api', authenticateToken, seederRoutes); // Protect seeder routes with token middleware

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

  
