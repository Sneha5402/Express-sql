const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to my EJS app!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', message: 'This is the about page.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

