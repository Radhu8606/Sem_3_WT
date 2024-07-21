const fs = require('fs');
//exist
// fs.exists("C:/Users/Dell/Desktop/SEM 3 material/WT",(exist)=>{
//     console.log(exist ? "found" : "Not found")
// })
// //stat
// fs.stat("C:/Users/Dell/Desktop/SEM 3 material/WT",(err,abc)=>{
//     console.log(abc);
// })
// //readfile
// fs.readFile("./path.js",(err,data)=>{
//     console.log(data.toString())
// })
// //readfileSync
// const data = fs.readFileSync("./path.js");
// console.log(data.toString());
//unlink
// fs.unlink("./wt.txt", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File deleted");
// });
//rename
fs.rename("wt.txt", "WT_new.txt", (err) => {
    if (err) {
        throw err;
    }
    console.log("File renamed");
});
