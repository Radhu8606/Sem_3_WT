const express = require('express');
const app = express();
app.use(express.json())
const list = ['radhu','aghera','jamnagar','gujrat','india'];
app.get('/list',(req,res)=>{
    res.send(list);
});
app.get('/list/:index',(req,res)=>{
    res.send(list[req.params.index]);
});
app.post('list/:name',(req,res)=>{
    list.push(list[req.params.name]);
    res.send(list);
});
app.delete('/list/:index',(req,res)=>{
    list.splice(req.params.index,1);
    res.send(list);
});
app.patch('list/:index/:newname',(req,res)=>{
    list[req.params.index] = req.params.newname;
    res.send(list);
});
app.listen(3005,()=>{
    console.log('server started at 3005');
});