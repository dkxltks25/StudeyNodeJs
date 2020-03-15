const http = require('http');
const parseCookies  = (cookie ='') =>{
    cookie
    .split(";")
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k,vs.join('=')])
    .reduce((acc,[k,v]) => {
        acc[k.trim()] = decodeURIComponent(v)
        return acc; 
    },{});
}
    http.createServer((req,res)=>{
        console.log(req.headers.cookie);
        const cookies = parseCookies(req.headers.cookie);
        console.log(cookies);
        res.writeHead(200,{'Set-Cookie':'mycookie=test'}); 
        res.end('hello Cookie'); 
    })
    .listen(8080,()=>{ 
        console.log('start 8080');
    })