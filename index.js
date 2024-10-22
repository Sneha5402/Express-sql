// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello !')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// GET METHOD

// var express=require('express');
// var app=express();

// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/'+'index.html');
// });
// app.get('/home', function(req, res) {
//     res.send('<h1>Welcome ' + req.query['username'] + '</h1><br><h2>Mail Id: ' + req.query['mailid'] + '</h2>');  // Properly closed <h2> tag
// });

// app.listen(8080);


// // POST METHOD
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get('/', function(req, res) {
//     res.sendFile(__dirname+'/'+'index.html');
// });
// app.post('/home', urlencodedParser, function(req, res) {
//     res.send('<h1>Welcome ' + req.body.username + '</h1><br><h2>Mail Id: ' + req.body.mailid + '</h2>');
// });

// app.listen(8080);



