//Fs for interacting with file system

//ASYNCHRONOUS APPROACH
//need to provide a callback
const {readFile, writeFile, read} = require('fs');
//dont forget to add utf-8, if not then it will return buffer result

console.log('start');
readFile('./content/first.txt','utf-8', (err, result) => {

  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt','utf-8', (err, result) => {

    if(err){
      console.log(err);
      return;
    }
    
    const second = result;
    writeFile('./content/result-async.txt', `Here is your text :  ${first} , ${second}`, (err, result) => {

      if(err){
        console.log(err);
        return
      }

      console.log('done with this task');
    } )
   
  
  })
 

})

console.log('starting with next task');

//this approach will offload the other task and continue with the other task, but it will still run it in the background
//In other words, it will run the other task asynchronously, while doing other task as well