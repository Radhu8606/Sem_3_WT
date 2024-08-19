const express = require('express');
const BodyParser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded());
const students = [[
    {
      "createdAt": "2024-08-07T11:35:08.873Z",
      "name": "Ms. Charlie Ernser",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/600.jpg",
      "email": "Anibal_Jakubowski20@yahoo.com",
      "age": "4",
      "id": "1"
    },
    {
      "createdAt": "2024-08-08T01:49:09.586Z",
      "name": "Naomi Gottlieb",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/745.jpg",
      "email": "Frances_Mohr58@yahoo.com",
      "age": "9",
      "id": "2"
    },
    {
      "createdAt": "2024-08-07T07:07:49.799Z",
      "name": "Desiree White",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/277.jpg",
      "email": "Conor.Wehner@gmail.com",
      "age": "1",
      "id": "3"
    },
    {
      "createdAt": "2024-08-07T09:22:00.065Z",
      "name": "Juanita Goyette",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/421.jpg",
      "email": "Erling_Homenick44@gmail.com",
      "age": "5",
      "id": "4"
    },
    {
      "createdAt": "2024-08-07T17:39:52.935Z",
      "name": "Clara Yundt",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/256.jpg",
      "email": "Keenan.Ledner@yahoo.com",
      "age": "5",
      "id": "5"
    }
  ]]
  app.get('/student',(req,res)=>{
    res.send(student);
});
app.get('/student/:id',(req,res)=>{
     const ans = student.find((stu)=>{
        if(stu.id == req.params.id){
            return true;
        }
     });
     res.send(ans);
});
app.post('student',(req,res)=>{
    list.push(student[req.body]);
    res.send('student added');
});
app.patch('/student/:id',(req,res)=>{
   const indexToEdit = student.findIndex((stu)=>{
    if(stu.id == req.params.id){
        return true;
    }
   });
    data = req.body
    student[indexToEdit] = {...student[indexToEdit],...data}
    res.send(student)
});
app.delete('student/:id',(req,res)=>{
    const indexToDelete = student.findIndex((stu)=>{
        if(stu.id == req.params.id){
            return true;
        }
    });
    student.splice(indexToDelete,1);
    res.send('student deleted')
});
app.get('/student/search/:text',(req,res)=>{
    const ans = student.filter((stu)=>{
        if(stu.name.indexOf(req.params.text)>-1){
            return true;
        }
    })
    res.send(ans);
})

app.listen(3006,()=>{
    console.log('server started at 3006');
});