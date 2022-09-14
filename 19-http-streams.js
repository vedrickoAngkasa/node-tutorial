
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', {encoding: 'utf-8'})
    fileStream.on('open', () => {
        //pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently
        //switches into flowing mode and then pushes all the data that it has to the attached Writable.
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)