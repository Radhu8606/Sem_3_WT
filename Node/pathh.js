const path = require('path');
console.log(path.normalize("C:/Users/Dell/Desktop/SEM 3 materialWT"));
console.log(path.join("C:/Users/Dell/Desktop/SEM 3 material/WT","Downloads"));
console.log(path.resolve("C:/Users/Dell/...","Downloads"));
console.log(path.relative("C:/Users/Dell/Desktop/SEM 3 material/WT","Downloads"));
console.log(path.dirname("C:/Users/Dell/Desktop/SEM 3 material/WT"));
console.log(path.basename("C:/Users/Dell/Desktop/SEM 3 material/WT"));
console.log(path.extname("C:/Users/Dell/Desktop/SEM 3 material/WT"));