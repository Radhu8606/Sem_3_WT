const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello Worlddd');
})

app.listen(3000, ()=>{
    console.log("server running");
});