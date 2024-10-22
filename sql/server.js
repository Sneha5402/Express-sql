const express = require('express');
const seederRoutes = require('./routes/seedroutes'); 

const app = express();
app.use(express.json());   

app.use('/api', seederRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  
