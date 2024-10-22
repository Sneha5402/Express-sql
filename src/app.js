
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');  
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/users', userRoutes);  

app.get('/', (req, res) => {
  res.send('Welcome to the Users API!');
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
