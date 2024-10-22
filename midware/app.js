var express =require('express')
var app = express();
var alert=require('alert');

app.use(function(req,res,next){
    alert('welcome');
    console.log('request methos is',req.method,req.url,'url address is');
    next();
});
app.get('/',function(req,res,next){
   console.log('first page');
   res.send('welcome to this page'); 
});

app.listen(8080);
