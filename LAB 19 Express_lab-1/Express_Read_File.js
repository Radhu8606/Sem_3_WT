const express = require('express');
const fs = require('fs');
const app = express();

app.get('/',function(req,res){
    res.send(fs.readFileSync("./abc.html").toString());
})

app.get('/Home',function(req,res){
    res.send(fs.readFileSync("./Home.html").toString());
})

app.get('/About',function(req,res){
    res.send(fs.readFileSync("./About.html").toString());
})

app.get('/Contact',function(req,res){
    res.send(fs.readFileSync("./Contact.html").toString());
})

app.get('/Order',function(req,res){
    res.send(fs.readFileSync("./Order.html").toString());
})

app.get('/Payment',function(req,res){
    res.send(fs.readFileSync("./payment.html").toString());
})

app.listen(3002, ()=>{
    console.log("server running");
});