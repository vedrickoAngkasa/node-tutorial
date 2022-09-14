//THIS IS A SYNCHORNOUS SERVER, thus it will make loading on process one by one

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home Page');
    }else if(req.url === '/about'){
        //BLOCKING CODE
        for(let i = 0 ; i < 1000 ; i++){
                for(let j = 0 ; i < 1000; j++){
                        console.log(`${i} ${j}`);
                }
        }
        res.end('About Page');
    }else{
        res.end('Error Page');
    }

    


});

server.listen(5000, () => {
    console.log("Server is Listening on port 5000");
});