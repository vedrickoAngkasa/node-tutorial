const http = require('http');
// const server = http.createServer ( ( req, res)=> {
// res.end( "Welcome")
// })
//Using Event Emitter API
const server = http.createServer();
// emitS request event
// subcribe to it/ listen for it / respond to it
//You can check what kind of events does server provide 
//by going to https://nodejs.org/docs/latest-v15.x/api/http.html and search for class http.Server
server.on('request', (req, res)=>{
res.end('Welcome')

})
server.listen(5000)