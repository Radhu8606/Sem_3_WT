const child_process = require('child_process');
child_process.exec("./fs.js",(err,stdout,stdin)=>{
   console.log(stdout)
})

