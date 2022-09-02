//HTTP module referes to server side code
const http = require('http');

const server = http.createServer((req, res) => {

  if(req.url === '/'){
    res.end("Welcome to our homepage");
  }else if(req.url === '/about'){
    res.end("Here is our about section");
  }else{
    res.end(`<h1> Page not found </h1> <a href="/">Go Back</a>`);

  }


})

server.listen(5000)
