const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Received the following data:\nName: ${name}\nEmail: ${email}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
