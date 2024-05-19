const path = require('path');

// console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt');
//getting the path of folder or file
console.log(filePath);

//getting the base file containing in the current directory 
const basePath = path.basename(filePath);
console.log(basePath);

// getting the full working directory of the current directory 
const absolutePath = path.resolve(__dirname, '/content/subfolder/test.txt');
console.log(absolutePath);