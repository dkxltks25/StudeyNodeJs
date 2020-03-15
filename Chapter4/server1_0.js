const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('<h1>123</h1>');
    res.end('<p>hello server1</p>');
})
server.listen(8080);
server.on('listening',()=>{
    console.log('8080 대기');
})
server.on('error',(e)=>console.error(e))