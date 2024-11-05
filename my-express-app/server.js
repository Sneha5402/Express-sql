const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = [];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Users API!');
});

// Create (POST)
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Read (GET)
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('Requested ID:', id);
  const user = users.find(u => u.id === id);
  if (user) {
    res.json(user);
  } else {
    console.log('User not found');
    res.status(404).json({ message: 'User not found' });
  }
});


// Update (PUT)
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = req.body;
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});id

// Update (PATCH)
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (user) {
    // Update only the fields provided in the request body
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete (DELETE)
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(8080, function() {
    console.log('Server running on http://localhost:8080');
});
