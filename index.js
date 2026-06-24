const http = require('http');

http.createServer((req,res)=>{

    res.write('Hello Jenkins Docker');

    res.end();

}).listen(3000);

console.log('Server Started');