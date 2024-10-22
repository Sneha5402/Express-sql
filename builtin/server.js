const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to Built-in!');
});

// This route will only work if express.static() is enabled.
app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nature.jpg')); 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
