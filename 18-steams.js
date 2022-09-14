//There are four types of streams which is Writeable, Readable, Duplex, and Transform
//Streams are data-handling method and are used to read or write input into output sequentially.

//Read Stream allow us to read file that is really big in terms of size, and it allow us to store it in a variable
const {createReadStream} = require('fs');
// default 64kb
// last buffer - remainder
// highWaterMark - control size
//The total size of the big.txt file is 169kb, thus the readStream allow us to divide those size into different chunks
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, encoding: 'utf-8'
});

stream.on('data', (result) => {
 console.log(result);
})

stream.on('error', (err) => console.log(err))
