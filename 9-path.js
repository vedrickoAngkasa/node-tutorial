//path module for path file system
const path = require('path');

//path seperator
//console.log(path.sep);

//join a sequence of path file system
const filePath = path.join('/content/', 'subfolder' , 'something.txt');
// console.log(filePath);

//to get the last file name from the path name
const baseName = path.basename(filePath);
// console.log(baseName);

//To provide an absolute path
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'something.txt');
// console.log(absolutePath);