//Fs for interacting with file system

//SYNCHRONOUS APPROACH

const {readFileSync, writeFileSync} = require('fs');
console.log('start');
//Read file from a path file system
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first, second);

//will overwrite into an existing text file, if the file doesnt exists then it will create it automatically
// writeFileSync('./content/result-sync.txt', `Here is your text ${first} , ${second}`);

//it will append into the existing file, by using flag a, a is for append
writeFileSync('./content/result-sync.txt', `Here is your text ${first} , ${second}`, {flag: 'a'});
console.log("Done with the task");

console.log("Starting with the next one");


//The above approach is sync fs, thus it will take a longer time to process