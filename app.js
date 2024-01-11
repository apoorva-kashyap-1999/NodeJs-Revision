//Creating a server in NodeJs
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
});

server.listen(3000);