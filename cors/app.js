const express = require('express');

const app = express();
const port=3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://your-frontend-url.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow headers

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); 
    }

    next(); 
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the manually configured server!' });
});
app.get('/data', (req, res) => {
    res.json({ message: 'Hello from the manually configured server!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});