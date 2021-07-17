const http = require('http');
const server = http.createServer(function(req,res){
    var obj = {
        name : 'oil',
        age : 23
    };
    if (req.url === '/'){
        res.write('Home Page');
        res.end();
    } 
    if(req.url === '/user'){
        res.write(JSON.stringify(obj));
        res.end();
    }
});
server.on('connection',function(socket){
    console.log('Client connected');
});
server.listen(3000);
