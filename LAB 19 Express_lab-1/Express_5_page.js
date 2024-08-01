const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello this is your required app');
})

app.get('/About',function(req,res){
    res.send('This page says you about our app');
})

app.get('/Home',function(req,res){
    res.send('This is your home page where you can explore our app');
})

app.get('/Contact',function(req,res){
    res.send('This our contact details.For any query you can contact us');
})

app.get('/Order',function(req,res){
    res.send('This page shows your order details');
})

app.get('/Payment',function(req,res){
    res.send('This page shows your payment details');
})

app.listen(3001, ()=>{
    console.log("server running");
});