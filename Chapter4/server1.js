const http = require('http');
http.createServer((req,res)=>{
    res.write("<h1>123</h1>");
    res.end("<p>123123</p>");
}).listen(8080,()=>{
    console.log("start server:8080")
})