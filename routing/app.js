var express = require('express');
var app = express();
var routing = require('./routing'); 

app.use('/', routing);

app.listen(3000, function() {
    console.log('Server running on http://localhost:3000');
});