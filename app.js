var express=require('express');
var app=express()
const port=3000;

app.use(longFunc)

app.get('/',function(req,res,next){
    console.log('request -/')
    res.send('Home Page');
})

var longFunc=function(req,res,next){
    console.log("function 1")
    next()
}

app.listen(3000);